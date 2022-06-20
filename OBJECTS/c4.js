const setting = {
    username : "P",
    level : 19,
    health : 90,
}

const data =  JSON.stringify(setting,["level", "health"]);

console.log(data)
console.log(data.length)


/*
answer : {"level":19,"health":90}

JSON.stringify(setting,["level", "health"])
as a second parameter it will only convert those property to string.


*/