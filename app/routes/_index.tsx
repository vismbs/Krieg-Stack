import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { serverAPI } from "~/router.server"

export const loader = async () => {
    return json({
        createdUser: await serverAPI.createUser({
            userName: "Vishal"
        })
    })
}

export default function Index() {
    const { createdUser } = useLoaderData<typeof loader>();
    return <div>{createdUser.userName}</div>
}