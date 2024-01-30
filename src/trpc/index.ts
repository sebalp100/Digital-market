import { authRouther } from './auth-router';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  auth: authRouther,
});

export type AppRouter = typeof appRouter;
