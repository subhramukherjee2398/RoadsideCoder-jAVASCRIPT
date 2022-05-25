
let user  =  {
    usename : 'Subhra',

    rc1: () =>{
      console.log(this.usename,"arrow")
    },
    rc2(){
        console.log(this.usename,"normal")
    }
}
user.rc1()
user.rc2()