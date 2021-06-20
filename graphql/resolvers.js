// Database 호출
import { getMovies, getMovie, getSuggestions } from "../db/db";

// Database data -> transform -> resolvers
const resolvers = {
    Query: {
        movies: (_, {rating, limit}) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers;


