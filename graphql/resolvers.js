// Database 호출
import { getMovies, getById, addMovie, deleteMovie } from "../db/db";

// Database data -> transform -> resolvers
const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;