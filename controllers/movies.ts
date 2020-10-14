import { Movie } from "../types.ts";

let movies: Movie[] = [
  {
    id: "1",
    name: "Tenet",
    genre: "Science Fiction",
    director: "Christopher Nolan",
    year: 2020,
  },
  {
    id: "2",
    name: "Interstellar",
    genre: "Science Fiction",
    director: "Christopher Nolan",
    year: 2014,
  },
  {
    id: "3",
    name: "The Martian",
    genre: "Science Fiction",
    director: "Ridley Scott",
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

export { getMovies };
