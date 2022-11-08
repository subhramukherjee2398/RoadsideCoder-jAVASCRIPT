
// create a button ui and add deboucing as follows=>

//1 show "Button Pressed <X> Times " every time button is pressed
//2 Increase "Triggered <Y> Times" count after 800ms of debounce


const btn = document.querySelector('.custom_btn')
const pressed = document.querySelector('.press')
const triggred = document.querySelector('.trigger')

var p = 0;
var t = 0;

const debounceTrigger = _.debounce(() => {
    triggred.innerHTML = ++t;
}, 800)

btn.addEventListener('click', () => {

    pressed.innerHTML = ++p;
    debounceTrigger();

})