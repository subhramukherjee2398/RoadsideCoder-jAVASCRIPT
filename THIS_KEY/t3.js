const user = {
    firstName:"Subhra",
    logMsg(){
      console.log(this.firstName)
    }
}

setTimeout(user.logMsg,1000)

// nothing will print because here user.lohMsg is 
// a call back not a function.


/*

How to fixed it?

*/

setTimeout(function(){
    user.logMsg
},1000)