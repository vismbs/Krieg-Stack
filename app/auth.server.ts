import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import {
  GoogleProfile,
  GoogleStrategy,
  SocialsProvider,
} from "remix-auth-socials";

export const OAuth = new Authenticator(sessionStorage);

async function handleSocialAuthCallback({
  profile,
}: {
  profile: GoogleProfile;
}) {
  console.log(profile);
  return profile;
}

OAuth.use(
  new GoogleStrategy(
    {
      clientID: !process.env.CLIENT_ID ? "" : process.env.CLIENT_ID,
      clientSecret: !process.env.CLIENT_SECRET ? "" : process.env.CLIENT_SECRET,
      scope: ["openid", "email", "profile"],
      callbackURL: `http://localhost:3000/auth/${SocialsProvider.GOOGLE}/callback`,
    },
    handleSocialAuthCallback
  )
);
