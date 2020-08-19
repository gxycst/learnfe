setTimeout(function () {
    console.log(1)
}, 0);

new Promise(function (resolve, reject) {
    console.log(2)
    for (var i = 0; i < 10000; i++) {
        if (i === 10) { console.log(10) }
        i == 9999 && resolve();
    }
    console.log(3)
}).then(function () {
    console.log(4)
})

console.log(5);



同步最先->promise->setTimeout

 2 10 3 5 4 1










 console.log(1)
 setTimeout(function() {
   //settimeout1
   console.log(2)
 }, 0);
 const intervalId = setInterval(function() {
   //setinterval1
   console.log(3)
 }, 0)
 setTimeout(function() {
   //settimeout2
   console.log(10)
   new Promise(function(resolve) {
     //promise1
     console.log(11)
     resolve()
   })
   .then(function() {
     console.log(12)
   })
   .then(function() {
     console.log(13)
     clearInterval(intervalId)
   })
 }, 0);
 
 //promise2
 Promise.resolve()
   .then(function() {
     console.log(7)
   })
   .then(function() {
     console.log(8)
   })
 console.log(9)

1 9 7 8  2 3  10  11 12 13







// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }

async function async1() {
    console.log('async1 start');
    Promise.resolve(async2()).then(()=>console.log('async1 end'))
}

async function async2() {
    console.log('async2');
}
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');


async1 start
async2
promise1
script end
async1 end
promise2