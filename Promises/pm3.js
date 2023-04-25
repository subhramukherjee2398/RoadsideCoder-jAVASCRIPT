
// run likeVideo function after importAction2

console.log('start2');

function importAction2(username, cb) {

    setTimeout(() => {
        cb(`Welcome ${username}`)
    }, 1000)

}

function likeVideo(msg, cb) {
    setTimeout(() => {
        cb(`okay ${msg}`)
    },2000)
}

const msg2 = importAction2('Subhra Mukherjee', function (msg2) {
    console.log(msg2)
    likeVideo('javascript', (text) => {
        console.log(text)
    })
});



console.log(msg2);