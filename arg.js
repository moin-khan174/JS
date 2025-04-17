function f(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
} 
f(2,4,"hello") //n JavaScript, every function has a special arguments object — it’s like an array (but not a real array), containing all the arguments passed to that function.