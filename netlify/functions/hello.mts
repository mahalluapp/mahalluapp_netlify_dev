import type { Context } from "@netlify/functions";
// import fs from 'fs';
// import path from 'path';
// import { current_dir } from "../../utils/dirname.js";
import dotenv from "dotenv"
import { CustomResponse } from "../../node/response.js";
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

  // const serviceAccountObj: any = {
  //   type: process.env.type,
  //   project_id: process.env.project_id,
  //   private_key_id: process.env.private_key_id,
  //   private_key: process.env.private_key,
  //   client_email: process.env.client_email,
  //   client_id: process.env.client_id,
  //   auth_uri: process.env.auth_uri,
  //   token_uri: process.env.token_uri,
  //   auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  //   client_x509_cert_url: process.env.client_x509_cert_url,
  //   universe_domain: process.env.universe_domain
  // }
  // console.log(serviceAccountObj.private_key)
  // const privateKey = process.env.NODE_ENV == "production" ? serviceAccountObj.private_key.replace(/#/g, '\n'): serviceAccountObj.private_key;
  // serviceAccountObj.private_key = privateKey;
  return new CustomResponse("OK")
}