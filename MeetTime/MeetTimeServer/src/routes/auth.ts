import express from "express";
import { msalClient } from "../authConfig";
import { Session } from "express-session";

interface UserSession extends Session {
  user?: { id: string; displayName: string };
}

const router = express.Router();

router.get("/login", (req, res) => {
  const authUrlParameters = {
    scopes: ["user.read"],
    redirectUri: process.env.AZURE_REDIRECT_URI as string,
  };

  msalClient
    .getAuthCodeUrl(authUrlParameters)
    .then((authUrl) => {
      res.redirect(authUrl);
    })
    .catch((error: any) => {
      console.error("Error getting auth URL: ", JSON.stringify(error));
      res.status(500).send("Error during authentication");
    });
});

router.get("/callback", (req, res) => {
  const tokenRequest = {
    code: req.query.code as string,
    scopes: ["user.read"],
    redirectUri: process.env.AZURE_REDIRECT_URI as string,
  };

  msalClient
    .acquireTokenByCode(tokenRequest)
    .then((response) => {
      if (response.account) {
        (req.session as UserSession).user = {
          id: response.account.homeAccountId || "",
          displayName: response.account.name || "Unknown User",
        };

        res.redirect("http://localhost:5173/dashboard");
      } else {
        console.error("Account information is missing in the response.");
        res.status(500).send("Account information is missing");
      }
    })
    .catch((error: any) => {
      console.error("Error during token acquisition: ", JSON.stringify(error));
      res.status(500).send("Error acquiring token");
    });
});

export default router;
