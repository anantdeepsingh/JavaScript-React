// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// closures the inner function remembers the variable of outer function even after outer function has completed its execution


function createCounter(){
    let count=0;
    return {
        increment(){
            count++;
            return count;
        },
        decrement(){
            count--;
            return count;
        },
        getCount(){
            return count;
        }
    }
}

const counter=createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount());
console.log(counter.decrement());
console.log(counter.getCount());

// map is used to create new array by applying function tyo each element of original array
// filter crerate new array based on certain conditions
// reduce to single value


// HOF takes another function as an argument 
// or return a function

// JS is flexible beacuse it consider functions as an first-class object
// pass fucntion into another function
//return fucntion from another function
// Store a function in a variable.
const numbers = [1, 2, 3];
const doubled = numbers.map(it=>it*2);
console.log(numbers);
console.log(doubled); // [2, 4, 6]
const evens=doubled.filter(it=> it%2===0);
console.log(evens);

const sum=numbers.reduce((accumulator,it)=>accumulator+it,0);
console.log(sum);

function createMultiplier(factor){
    return function(num){
        return num*factor;
    }
}

const double=createMultiplier(2);
console.log(double(10000));

setTimeout(()=>{
    console.log("Hello");
});
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ✅ 10 — because `var` is function/global scoped
// console.log(b); // ❌ ReferenceError
// console.log(c); // ❌ ReferenceError

// Promise is an object used to handle asynchronuou operations 
// has three state pending,fulfilled,reject
// can be called using .then.catch / aysnc-await
const myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Pizza deleivered");
        }
        else{
            reject("Deliver failed");
        }
    },2000);
})

myPromise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})

async function OrderPizza(){
    try{
        const result=await myPromise;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
OrderPizza();
