import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getMovies, getMovie } from './controllers/movies.ts';
const router = new Router();

// create a route
router
  .get('/api/movies', getMovies)
  .get('/api/movies/:id', getMovie)
  .post('/api/movies', addMovie)
  .put('/api/movies/:id', updateMovie)
  .delete('/api/movies/:id', deleteMovie);

export default router;
