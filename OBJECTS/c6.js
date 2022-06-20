
function get(fruit, ...args, favList){
    return [...fruit ,...args,favList ]
}

console.log(get(["A","B"],"P","0"))