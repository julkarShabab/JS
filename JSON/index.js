const jsonnames = `["shabab","julkar","niene"]`
const jsonperson = `{
    "name":"shabab",
    "age":30,
    "isEmployed": true,
    "hobbies": ["sleeping","eating"]
}`
const jsonpeople = `[{
    "name":"shabab",
    "age":30,
    "isEmployed": true
},
{
    "name":"julkar",
    "age":24,
    "isEmployed": false

},
{
    "name":"niene",
    "age":23,
    "isEmployed": false

}]`
// const jsonString = JSON.stringify(person);
// console.log(jsonString);
const purseData = JSON.parse(jsonperson)
console.log(jsonperson);

