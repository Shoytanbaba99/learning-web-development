import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import superjson from "superjson";
import { ZodError } from "zod";

import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

/**
 * 1. CONTEXT
 * This section defines the "Context" that is available to every API call.
 * We are adding the 'session' here so the API knows who is logged in.
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const session = await getServerAuthSession();

  return {
    db,
    session,
    ...opts,
  };
};

/**
 * 2. INITIALIZATION
 * Initialize tRPC (The backend framework)
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * 3. ROUTER & PROCEDURES
 * These are the building blocks of your API.
 */
export const createCallerFactory = t.createCallerFactory;
// This is the "Base" router builder
export const createTRPCRouter = t.router;

// This is the "Public" procedure (Anyone can use it)
export const publicProcedure = t.procedure;

/**
 * 4. PROTECTED PROCEDURE (The New Tool!)
 * This middleware checks if the user is logged in.
 * If not, it throws an UNAUTHORIZED error.
 */
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // Infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

// We export this so your routers can use it
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
