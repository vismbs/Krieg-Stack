import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from '~/context.server';
import { appRouter } from '~/router.server';
export const loader = async (args: LoaderArgs) => {
    return handleRequest(args);
};
export const action = async (args: ActionArgs) => {
    return handleRequest(args);
};
function handleRequest(args: LoaderArgs | ActionArgs) {
    return fetchRequestHandler({
        endpoint: '/trpc',
        req: args.request,
        router: appRouter,
        createContext,
    });
}