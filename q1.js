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
const numbers = [1, 2, 3];
const doubled = numbers.map(it=>it*2);
console.log(numbers);
console.log(doubled); // [2, 4, 6]
const evens=doubled.filter(it=> it%2===0);
console.log(evens);

const sum=numbers.reduce((accumulator,it)=>accumulator+it,0);
console.log(sum);
