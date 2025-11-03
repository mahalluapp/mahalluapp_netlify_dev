import { google } from "googleapis";
import { cert, initializeApp } from "firebase-admin/app";
require("dotenv").config();
console.log(process.env.NODE_ENV);
const credentialsPath = process.env.NODE_ENV === "production"
  ? "./etc/secrets/credentials.json"
  : "./etc/secrets/credentials.json";
const serviceAccount = require(credentialsPath);
const app = initializeApp({
  credential: cert(serviceAccount),
});
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/documents",
    "https://www.googleapis.com/auth/drive",
  ],
});
export const sheets = google.sheets({ version: "v4", auth });
export const docs = google.docs({ version: "v1", auth });
export const drive = google.drive({ version: "v3", auth });
