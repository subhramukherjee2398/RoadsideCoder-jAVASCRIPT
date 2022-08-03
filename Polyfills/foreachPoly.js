Array.prototype.eachAlbum = function(callback) {
    // callback here is the callback function
    // which actual .forEach() function accepts
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this) // currentValue, index, array
    }
  }