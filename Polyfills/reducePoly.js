

Array.prototype.myReduce = function(cb,initialvalue){
    var accumalor = initialvalue;
    for(let i = 0 ; i<this.length ; i++){
        accumalor = accumalor ? cb(accumalor,this[i],i,this) : this[i]
    }
    return accumalor
}