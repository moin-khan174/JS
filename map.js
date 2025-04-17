let arr=[2,3,4,5,6];
// let b=arr.map((number)=>{
//     return number%2===0;
// })
// console.log(b);
let brr=arr.reduce((acc,curr)=>{
    return acc+curr

},0)
console.log(brr)