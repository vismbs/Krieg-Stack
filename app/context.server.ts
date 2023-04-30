import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { prisma } from './db.server';
export function createContext({
    req,
    resHeaders,
}: FetchCreateContextFnOptions) {
    return { prisma };
}
export type Context = inferAsyncReturnType<typeof createContext>;
export const trpcAPI = initTRPC.context<Context>().create();
export const trpcRouter = trpcAPI.router;
export const publicProcedure = trpcAPI.procedure;