const btn = document.querySelector('.custom_btn')
const pressed = document.querySelector('.press')
const triggred = document.querySelector('.trigger')

var p = 0;
var t = 0;


const myDebounce = (cb, delay) => {
    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            cb(...args)
        }, delay)
    }

}

const debounceTrigger = myDebounce(() => {
    triggred.innerHTML = ++t;
}, 800)

btn.addEventListener('click', () => {

    pressed.innerHTML = ++p;
    debounceTrigger();

})