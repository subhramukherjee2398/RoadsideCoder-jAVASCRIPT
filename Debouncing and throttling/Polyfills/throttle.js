
const btn = document.querySelector('.custom_btn')
const pressed = document.querySelector('.press')
const triggred = document.querySelector('.trigger')

var p = 0;
var t = 0;

const start = new Date().getTime()


const mythrottle = (cb,delay) =>{
  
    let lastEvent = 0 ; 

    return function(...args){
        let now = new Date().getTime();
        if(now-lastEvent < delay) return;
        lastEvent = now;
        return cb(...args);

    }

}


const trottlingTrigger = (() => {
    const now = new Date().getTime()
    console.log(now - start)
    triggred.innerHTML = ++t;
}, 800)

btn.addEventListener('click', () => {

    pressed.innerHTML = ++p;
    trottlingTrigger();

})