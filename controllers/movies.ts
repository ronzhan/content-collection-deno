import { v4 } from 'https://deno.land/stu/uuid/mod.ts';
import { Movie } from '../types.ts';

let movies: Movie[] = [
  {
    id: '1',
    name: 'Tenet',
    genre: 'Science Fiction',
    director: 'Christopher Nolan',
    year: 2020,
  },
  {
    id: '2',
    name: 'Interstellar',
    genre: 'Science Fiction',
    director: 'Christopher Nolan',
    year: 2014,
  },
  {
    id: '3',
    name: 'The Martian',
    genre: 'Science Fiction',
    director: 'Ridley Scott',
    year: 2015,
  },
];

// @desc get all movies
// @route GET /api/movies
const getMovies = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: movies,
  };
};

// @desc get one movie
// @route GET /api/movies/:id
const getMovie = ({ params, response }: { params: { id: string }; response: any }) => {
  const movie: Movie | undefined = movies.find((el) => el.id === params.id);

  if (movie) {
    response.status = 200;
    response.body = {
      success: true,
      data: movie,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: 'No movie found',
    };
  }
};

// @desc add movies
// @route POST /api/movies
const addMovie = async ({ request, response }: { request: any; response: any }) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: 'No data',
    };
  } else {
    const movie: Movie = body.value;
    movie.id = v4.generate();
    movies.push(movie);
    response.status = 201;
    response.body = {
      success: true,
      data: movie,
    };
  }
};

export { getMovies, getMovie };
