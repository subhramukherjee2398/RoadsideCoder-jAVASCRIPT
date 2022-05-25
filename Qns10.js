// using closure
// make the function run only once

/* let view;
function likeTheVideo() {
  (view = "Subhra") 
  console.log("Name", view);
}
 */
/* likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();
likeTheVideo();
 */
// soultion
let view2;
function solutionLike() {
    
  let call = 0;
   console.log("call",call)
  return function () {
    if (call > 0) {
      console.warn("Aleadry asked");
    } else {
        view2 = "HHHD"
        console.log("View2", view2)
        call++
    }
  };
}

let solt = solutionLike()
solt()
solt()
solt()
solt()
solt()
solt()
