
// create a button ui and add throttling as follows=>

//1 show "Button Pressed <X> Times " every time button is pressed
//2 Increase "Triggered <Y> Times" count after 800ms of throttle

const btn = document.querySelector('.custom_btn')
const pressed = document.querySelector('.press')
const triggred = document.querySelector('.trigger')

var p = 0;
var t = 0;

const start = new Date().getTime()

const trottlingTrigger = _.throttle(() => {
    const now = new Date().getTime()
    console.log(now - start)
    triggred.innerHTML = ++t;
}, 800)

btn.addEventListener('click', () => {

    pressed.innerHTML = ++p;
    trottlingTrigger();

})