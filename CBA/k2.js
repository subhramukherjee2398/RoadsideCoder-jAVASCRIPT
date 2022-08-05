var s = "1";

setTimeout(() => {
  const s = "2";

  const data = {
    s: "3",
    getStatus() {
      return this.s;
    },
  };
  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);


//line -> 12  = 3
//linr -> 13  = 1  pointing to global objet
