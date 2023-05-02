import { OAuth } from "~/auth.server";
import { SocialsProvider } from "remix-auth-socials";

export const loader = ({ request }: { request: any }) => {
  return OAuth.authenticate(SocialsProvider.GOOGLE, request, {
    successRedirect: "/",
    failureRedirect: "/",
  });
};
