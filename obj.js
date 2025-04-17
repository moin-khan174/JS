 const d={
    name:"Niom",
    age:22,
    color:"brown",
    b:{
    lname:"demon"

    }   
 }
 const a = JSON.parse(JSON.stringify(d));
 a.b.lname="luke"
 console.log(d)

//  const b={ name:"Morgan",age:44,color:"Black"}
//  Object.assign(b,a);
//  console.log(b)
// let date = new Date()
// console.log(date)

// let arr=[1,2,3,5,434,232,354,5,645]
// let b=Math.max(...arr);
// console.log(b)

// let a= Math.random()*1000
// let b=Math.ceil(a)
// console.log(b)