import type { Context } from "@netlify/functions";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

require('dotenv').config()

export default async (req: Request, context: Context) => {
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const credentialsPath =path.join(__dirname, '../../etc/secrets/credentials.json')
  // process.env.NODE_ENV === 'dev'
  //   ? path.join(__dirname, '../../etc/secrets/credentials.json') // absolute path in prod
  //   : path.join(__dirname, '../../etc/secrets/credentials.json'); // local path for dev

const rawData = fs.readFileSync(credentialsPath, 'utf-8');
const serviceAccount = JSON.parse(rawData);

console.log('Loaded credentials:', serviceAccount);
  return new Response("Hello, world! Serverless")
}