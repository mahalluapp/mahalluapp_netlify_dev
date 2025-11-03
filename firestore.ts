import { initializeApp,cert} from 'firebase-admin/app';
import { getFirestore} from 'firebase-admin/firestore';
import { google } from 'googleapis';

require('dotenv').config()
console.log(process.env.NODE_ENV)
const credentialsPath = process.env.NODE_ENV === 'production'
    ? './etc/secrets/credentials.json'
    : './etc/secrets/credentials.json';
const serviceAccount = await import(credentialsPath, {
  assert: { type: 'json' }
});
console.log(serviceAccount);
 const app =  initializeApp({
    credential: cert(serviceAccount)
  });
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ['https://www.googleapis.com/auth/spreadsheets','https://www.googleapis.com/auth/documents','https://www.googleapis.com/auth/drive'],
  });
export const db = getFirestore(app);  


