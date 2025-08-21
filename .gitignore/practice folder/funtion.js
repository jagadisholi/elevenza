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

const obj ={a:1};
obj.b=2;
console.log(obj);