// Database 호출
import { people, getById } from "../db/db";

// Database data -> transform -> resolvers
const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
}

export default resolvers;