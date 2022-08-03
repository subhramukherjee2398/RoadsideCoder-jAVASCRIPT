
Array.prototype.ourMap = function(callback) {
    var arr = [] // since, we need to return an array
    for (var i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
    }
    return arr // finally returning the array
  }

  let a = [10 , 20 , 30 , 40 , 50]

 let k =  a.ourMap((ele)=>{
    return ele*3
  })

  console.log(k)