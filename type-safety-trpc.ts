// Example of type-safe communication between frontend & backend using tRPC

import { initTRPC } from "@trpc/server";

// Defining the backend API
const t = initTRPC.create();
const appRouter = t.router({
  getUser: t.procedure.query(() => {
    return { id: 1, name: "John Doe" };
  }),
});

// Simulating frontend consuming the API
type AppRouter = typeof appRouter;
import { createTRPCClient, httpBatchLink } from "@trpc/client";

const client = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: "/trpc" })],
});

async function fetchUser() {
  const user = await client.getUser.query();
  console.log(user); // Output: { id: 1, name: "John Doe" }
}

fetchUser();
