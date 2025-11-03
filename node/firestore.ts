import { initializeApp,cert} from 'firebase-admin/app';
import { getFirestore} from 'firebase-admin/firestore';
// import fs from 'fs';
// import path from 'path';
// import { current_dir}  from '../utils/dirname.js';
import dotenv from 'dotenv';
dotenv.config({ override: false });

// const credentialsPath =process.env.NODE_ENV === 'production' ? path.join(current_dir, '../../etc/secrets/credentials.json') : 
// path.join(current_dir, '../../etc/secrets/credentials.json');

// const rawData = fs.readFileSync(credentialsPath, 'utf-8');
// const serviceAccount = JSON.parse(rawData);
const serviceAccountObj :any = {
  type : process.env.type,
  project_id : process.env.project_id,
  private_key_id : process.env.private_key_id,
  private_key : process.env.private_key,
  client_email : process.env.client_email,
  client_id : process.env.client_id,
  auth_uri : process.env.auth_uri,
  token_uri : process.env.token_uri,
  auth_provider_x509_cert_url : process.env.auth_provider_x509_cert_url,
  client_x509_cert_url : process.env.client_x509_cert_url,
  universe_domain : process.env.universe_domain
}
// serviceAccountObj.private_key = serviceAccountObj.private_key.replace(/\\n/g, '\n')

// console.log(serviceAccount)
console.log(serviceAccountObj)
 const app =  initializeApp({
    credential: cert(serviceAccountObj)
  });
export const db = getFirestore(app);  


