
let arr  =  [1,2 , 3 , 4 , 5]

const newJ = arr.reduce((acc,ele)=>{
   
  return acc + ele;

},0)

console.log(newJ)

const hj  =  arr.map((ele)=>{
    return ele * ele
})

console.log(hj)

