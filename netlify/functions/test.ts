import type { Context } from "@netlify/functions";
// import fs from 'fs';
// import path from 'path';
// import { current_dir } from "../../utils/dirname.js";
import dotenv from "dotenv"
import { CustomResponse } from "../../node/response.js";
dotenv.config({ override: false });

export default async (req: Request, context: Context) => {

const encoded = process.env.encoded_private_key as string
const decoded = Buffer.from(encoded, 'base64').toString('utf8');

  return new CustomResponse(decoded)
}