import { OAuth } from "~/auth.server";
import { SocialsProvider } from "remix-auth-socials";

export const action = async ({ request }: { request: any }) => {
  return await OAuth.authenticate(SocialsProvider.GOOGLE, request, {
    successRedirect: "/",
    failureRedirect: "/",
  });
};
