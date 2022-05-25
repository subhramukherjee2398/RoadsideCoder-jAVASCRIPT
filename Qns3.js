/* for(let  i = 0 ; i<5 ; i++){
    setTimeout(()=>{
        console.log(i)
    },i * 1000)
}*/
/*answer : i is declarea as let, and let have block scope, so for every iteration let will create a block scope and value will be 1 , 2 3...   */



/* for(var j = 0 ; j<5 ; j++){
    setTimeout(()=>{
        console.log(j)
    },j * 1000)
} */

/*answer : As i is declare as var ,it's have function scope; that's means it will declare one time, value will be update and at the end it will give 5 , 5 , 5 , 5 , 5   */


