

console.log('start');

function importAction(username) {

    setTimeout(() => {
        return `Welcome ${username}`
    }, 1000)

}

const msg = importAction('Subhra Mukherjee');

console.log(msg);

console.log('end')


// how to solve it and get the value

// solve it using call backs

console.log('start2');

function importAction2(username, cb) {

    setTimeout(() => {
        cb(`Welcome ${username}`)
    }, 1000)

}

const msg2 = importAction2('Subhra Mukherjee', function (msg2) {
    console.log(msg2)
});

console.log(msg2);

console.log('end2')