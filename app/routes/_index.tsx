import { Form } from "@remix-run/react";
import { SocialsProvider } from "remix-auth-socials";

const IndexPage = () => {
  return (
    <div className="m-3">
      <Form method="post" action={`/auth/${SocialsProvider.GOOGLE}`}>
        <button className="px-6 py-3 bg-stone-700 rounded-xl text-white font-bold">
          Login with Google
        </button>
      </Form>
    </div>
  );
};

export default IndexPage;
