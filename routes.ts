import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

// create a route
router.get("/api", ({ response }: { response: any }) => {
  response.body = "hello";
});

export default router;
