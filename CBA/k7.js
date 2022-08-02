 
 function f(){
    console.log(this.name)
 }

 f = f.bind({name : "ANC"}).bind({name : "LLL"})


 /*

 once a obj bind with function it should always
 be there and bind chaining does'nt exist
 ans: name : "ANC"

 */