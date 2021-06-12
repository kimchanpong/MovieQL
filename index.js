import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// schema.graphql: 유효성 검증
// resolvers: db 데이터 호출
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("MovieQL Server Start"));