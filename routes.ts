import { Router } from "https://deno.land/x/oak/mod.ts";
import { getMovies } from "./controllers/movies.ts";
const router = new Router();

// create a route
router.get("/api/movies", getMovies);

export default router;
