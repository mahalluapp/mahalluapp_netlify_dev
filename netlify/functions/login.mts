import { type Context } from "@netlify/functions";
import jwt from "jsonwebtoken";
import { db } from "../../node/firestore.js"; // <-- update import path
import dotenv from "dotenv";
dotenv.config({ override: false })

export default async (req: Request, context: Context): Promise<Response> => {
  try {
    // Extract Authorization header
    const token = req.headers.get("authorization") ||
      req.headers.get("Authorization");

    if (!token) {
      return new Response("Forbidden: No token provided", { status: 403 });
    }
    // Verify token with Firebase Identity Toolkit
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken: token }),
      },
    );
    if (!response.ok) {
      console.error("Firebase Identity lookup failed:", response.statusText);
      console.log(process.env.API_KEY)
      return new Response("Forbidden: Invalid token lookup", { status: 403 });
    }
    const user :any = await response.json();
    const id = user?.users?.[0]?.localId;

    if (!id) {
      return new Response("Forbidden: Invalid user", { status: 403 });
    }

    // Fetch user data from Firestore
    const userRef = db.collection("users").doc(id);
    const doc = await userRef.get();

    if (!doc.exists) {
      return new Response("Forbidden: User not found", { status: 403 });
    }

    // Create JWT
    const payload = { roles: doc.data()?.roles, id };
    const JWT = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
      expiresIn: "86400s", // 24 hours
    });

    // Build headers with HttpOnly cookie
    const headers = new Headers({
      "Set-Cookie": `SIDLDGR=${JWT}; HttpOnly; Max-Age=${
        24 * 60 * 60
      }; Path=/; SameSite=None; Secure`,
      "Content-Type": "application/json",
    });

    return new Response(JSON.stringify({ message: "Token Created" }), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error verifying user:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
