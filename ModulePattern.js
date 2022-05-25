
var Module =  (function(){
    function privateMethod(){
        console.log("Private")
    }

    return {
        publicMethod:function(){
            console.log("public")
        }
    }
})()

Module.publicMethod()
Module.privateMethod()