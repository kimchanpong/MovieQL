// Database 영역
const chanpong = {
    name: "chanpong",
    age: 35,
    gender: "female"
}

const resolvers = {
    Query: {
       person: () => chanpong
    }
}

export default resolvers;