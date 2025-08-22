// const jsonString = '{"name":"john","age":30,"city":"New York"}';
// const jsonObject = JSON.parse(jsonString); // Json to object
// console.log(jsonObject.name)


const objectToConvert = {
    name: "Alice",
    age: 25
};

const json = JSON.stringify(objectToConvert); //Convert object to JSON String
console.log(json)