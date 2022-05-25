
const fn = (a,...numbers,x,y) => {
    console.log(x,y,numbers)
   }

   fn(2,3,4,6,8,10)

const fn2 = (a,x,y,...numbers) => {
 console.log(x,y,numbers)
}

fn2(2,3,4,6,8,10)