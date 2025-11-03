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
// const encoded = process.env.encoded_private_key as string
// const decoded = Buffer.from(encoded, 'base64').toString('utf8');
const random = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCMCM43m5UrXE6x\nKK3qOoIoBpOusvPDM+OL0/ZZKb3sNPQp8QqEXgcjbMYYPEUaD2O50AjoQBrYCpNS\ns20OaPP2++CUdwJI8Z/gXj68tswiKEjK8+dONrE5Akzqa/ssi4jbQNYnzq4jKxIx\nbKll9iv6mo9Cteaq2xBGvxH2ZbyH3CXDaR7GjG74wYvgvBCSsCpIRUKkZztZbJcj\nD+mQhyb+lRz3L8ajdLYgbwWbwEeIrbp/rN3Nm2dJGgNa85fx4ZP786fr04VSIhbb\nvEtNPtyep9DmiRvFf6GDPJnfFt3d8hD5y3sSq2yaC64D9Qo+orEpBIi3wUCCfq9+\nDfekk9gBAgMBAAECggEAAwnV36MCk5RHKNTnISPv2wp5fdroKx4fG9OXjsu3ET78\n5UQTpFed9AjSK4hzP2OCGHAJIXDypClmlO7LuPpSANPqRY5ngEmt3GJvHg0hVMRm\n//BW3n2VTtVb8eIx6v+EEq3Pd8GmSaEPnf7rlgjHX4KnBR2JSb/DFKXkr+H5O0Fl\nXzmBxEJqwQFjL0XoRHDiBsDfoAv7YdSpRmU/Vy6Ye9v2N0zKO1arJ8qsccCn+261\ntLXa4LmK+SonbvrO1R0/F5Eac5RXQpgfdUYes4KN/Qw3gsB55InxlMfQVrN19v+3\nhjMw+fLEb0DgRWjMtWqsWF7UCnykhFkSmKP8jm/MmQKBgQDFJZG2GbponQe3+jkh\nPOZZhdhUcGgoYJjdXRJc5mSwy125xEEwl/f1/7hoH5qh5ZDew2Y5vcm/MJz7vQAQ\njNW76rrwtZDLT4QOY7BmKnqTdCSMKRvpU3F5t8kzbO4UmBpgG7syxKEv6scMsBTn\nBzuiqtahneQlTHQf+NRcTTvPawKBgQC11pJ1rd4VlatkKgFlux38CB1KNjo55EvJ\nEMm/txuuSXWp5yOZQyJJlh9ZW4s7C2eLjBuCHLSL4kbp42YPgo6B3g7yI2UkDvhl\n1QRWnsKTaMP6ZNrl7k3dIfkjvirTobbU41Xr7N72HCER+U8DfhW6DUU7ejxXKYNe\nmrk2FtRtQwKBgCDNF2lM7o7pUZdysn6tO0Y51rx1116gc86g5aU/UBF6RKXb2VzU\nbBUp7uykFX5KS8hEioWg5ihBVl0sHQ6j4AvcCi5yhxzMphQe0gKtnqdZ85q+XD59\n+6tcwMUlopcal4jWFFdmD8uBLI0X3uJxeaKe+gb51jO+fLO1GuAgmYrxAoGAHsi3\nvNJ1kaPoAyoVWHqoJd3dz42Ep/5dUinUbe968TOghuYJoc26xUh0ADW+SX2xxu8u\nTQW9Dx18seX8hk2tAJFuaFHTspoSNXMtq9huynPnEcH3SQviBLjWq9Vq/K8Y+8uM\n5UcRrAqxEpDpbobu+LN8cAhOpNbzVZXOGzkcN28CgYAcHel3+DEVYbMjWMxD7I+l\n0p7bmtVcH3gBxqYt5l3LKDt+qEYd65Tei2vF70Fv6ABJXSPe4YJf3FgTSSs6WHPK\nimCTMtAtwUdcTNmENCVx2gGzl2Vb2aMuDVQk0aTSN6uGqo496RsUxT2WiTns5DPE\nFIWWtwbeRnNCfQLtH9hmSA==\n-----END PRIVATE KEY-----\n"
const serviceAccountObj :any = {
  type : process.env.type,
  project_id : process.env.project_id,
  private_key_id : process.env.private_key_id,
  private_key : random,
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
// console.log(serviceAccountObj)
 const app =  initializeApp({
    credential: cert(serviceAccountObj)
  });
export const db = getFirestore(app);  


