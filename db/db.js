// 실제 DB 대신..
export const people = [
    {
        id: 1,
        name: "chanpong",
        age: 35,
        gender: "female"
    },
    {
        id: 2,
        name: "arum",
        age: 36,
        gender: "male"
    },
    {
        id: 3,
        name: "suhyun",
        age: 1,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(people => people.id === id);
    return filteredPeople[0];
}