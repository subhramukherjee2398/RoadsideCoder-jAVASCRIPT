// sync vs async code example

// sync

console.log('start');

console.log('Some actions');

console.log('end')


// async

console.log('start async');

setTimeout(()=>{
    console.log('Some action async')
},0)

console.log('end async')