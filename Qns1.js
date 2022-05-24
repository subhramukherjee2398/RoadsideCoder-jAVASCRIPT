let students = [
  { name: "aaa", roll: 5, marks: 80 },
  { name: "b", roll: 15, marks: 20 }, 
  { name: "cc", roll: 25, marks: 30 }, 
  { name: "dd", roll: 10, marks: 60 },
  { name: "Eio", roll: 1, marks: 100 },
];

// Qns : 1 return students name in "Capital Letter":

let CapName =  students.map((ele)=>{
    return ele.name.toUpperCase();
})

console.log(CapName)

// Qns : 2 rerturns  those student details have more than 50 marks

let PassStu  =  students.filter((ele)=>{
    return ele.marks > 50
})

console.log(PassStu)

//Qns : 3 rerturns  those student details have more than 40 marks & rollnumber > 10

let Gdstu  =  students.filter((ele)=>{
    return ele.marks > 40 && ele.roll < 10
})
console.log(Gdstu)
//Qns : 4 sum of marks of all students 

let TotalM =  students.reduce((acc,ele)=>{
    return acc + ele.marks
},0)

console.log(TotalM);

//Qns : 5 return only name of the students who scrore > 50

let Filmap =  students.filter((ele)=>{
    return ele.marks > 50
}).map((item)=>{
    return item.name
})

console.log(Filmap)

//Qns : 6 Return total marks of the students with marks > 60  and afetr added 20 marks to those marks will be < 60

/* solutionm :case 1 : add 20 marks who's score is < 60
            : case 2 : filter those have still marks is > 60
            */



let Ftaol = students.map((ele)=>{
     if(ele.marks < 60){
      ele.marks += 20
    }
    return ele;
}).filter((ele)=>{
    return ele.marks >= 60;
}).reduce((acc,ele)=>{
   return acc + ele.marks
},0)

console.log(Ftaol)



