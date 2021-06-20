// Database 호출
import { getMovies } from "../db/db";

// Database data -> transform -> resolvers
const resolvers = {
    Query: {
        movies: (_, {rating, limit}) => getMovies(limit, rating)
    }
};

export default resolvers;


