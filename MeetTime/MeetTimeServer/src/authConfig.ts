import { ConfidentialClientApplication, Configuration } from '@azure/msal-node';
import dotenv from 'dotenv';

dotenv.config();

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.AZURE_CLIENT_ID as string,
    authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}` as string,
    clientSecret: process.env.AZURE_CLIENT_SECRET as string,
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: 3,
    },
  },
};

export const msalClient = new ConfidentialClientApplication(msalConfig);
