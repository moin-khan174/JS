// (function sum(a,b){
//     console.log(a+b)
// }(22,55))

// (function (x){
//      return (function (y){
//         console.log((x))
//     }(2))
// }(1))

// var a = {},
//     b = {
//          key: 'b' 
//         },
//     c = {
//          key: 'c' 
//         };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

setTimeout(() => {
    setInterval(() => {
      console.log("Repeated every second after 5s delay");
    }, 3000);
  }, 5000);
  
