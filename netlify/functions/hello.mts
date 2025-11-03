import type { Context } from "@netlify/functions";
// import fs from 'fs';
// import path from 'path';
// import { current_dir } from "../../utils/dirname.js";
import dotenv from "dotenv"
dotenv.config({ override: false });

export default async (req: Request, context: Context) => {

// const credentialsPath =process.env.NODE_ENV === 'dev' ? path.join(current_dir, '../../etc/secrets/credentials.json') : 
// path.join(current_dir, '../../etc/secrets/credentials.json');
  // process.env.NODE_ENV === 'dev'
  //   ? path.resolve('/etc/secrets/credentials.json') // absolute path in prod
  //   : path.join(__dirname, '../../etc/secrets/credentials.json'); // local path for dev

// const rawData = fs.readFileSync(credentialsPath, 'utf-8');
// const serviceAccount = JSON.parse(rawData);
// const serviceAccountEnv=JSON.parse(process.env.SERVICE_ACCOUNT as string)
  return new Response("OK")
}