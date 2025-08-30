// // function sum(x,y){
// //     return x+y;
// // }
// // console.log(sum(10,3));

// // function factorial(n) {
// //     if (n === 0 || n === 1) return 1;

// //     let result = 1;
// //     function recursiveFactorial(num) {
// //         if (num === 1) return;
// //         result *= num;
// //         recursiveFactorial(num - 1);
// //     }
// //     recursiveFactorial(n);
// //     return result;
// // }

// // console.log(factorial(7)); // 5040


// // const x =() =>{};
// // console.log(x.name);

// // function foo(x,y,z){
// //     return x+y+z;
// // }

// // const bar = foo.bind(null, 1);
// // console.log(bar(2,3));


// function factorial(n, memo ={}){
//     if(n<=1)return 1;
//     if(memo[n])return memo[n];
//     memo[n] =n*factorial(n-1, memo);
//     return memo[n];
// } 
// (fucntion f(){
//     console.log(typeof f);
// })();


// const add =(a,b) => a+b;
// console.log(add(5));
/* The code snippet is creating an object `obj` with a property `a` set to the value `1`. Then, it adds
a new property `b` to the `obj` object with a value of `2`. Finally, it logs the `obj` object to the
console, which will display both properties `a` and `b` with their respective values. */

// const obj ={a:1};
// obj.b=2;
// console.log(obj);

// const obj = {a:1,b:2};
// const {a,b} =obj;
// console.log(a,b);


// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Ajay", sayBye);
console.log("A");
setTimeout(()=>
    console.log("B"),0);
Promise.resolve().then(()=>
console.log("C"));
console.log("D");

    
