import { z } from 'zod';
import { publicProcedure, trpcRouter } from './context.server';
import { prisma } from './db.server';

export const appRouter = trpcRouter({
    createUser: publicProcedure
        .input(z.object({
            userName: z.string(),
        }))
        .mutation(async ({ input, ctx }) => {
            const createdUsers = await ctx.prisma.user.create({
                data: {
                    userName: input.userName,
                }
            });

            return createdUsers;
        }),
});

export type AppRouter = typeof appRouter;
export const serverAPI = appRouter.createCaller({ prisma: prisma })