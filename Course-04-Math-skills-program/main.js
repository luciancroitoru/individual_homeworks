console.log(`Math Skills Program`);

let a = Math.floor(Math.random() * 99 + 1);
let b = Math.floor(Math.random() * 99 + 1);
console.log(`Random number a: ${a}`);
console.log(`Random number b: ${b}`);

let sum = a + b;
console.log(`Sum is: ${sum}`);

let answerSum = prompt(`What is the sum between ${a} and ${b}?`)
answerSum = Number(answerSum);

if(answerSum == sum){
    alert(`Your answer is correct`);
} else {
    alert(`Your answer is incorrect. The correct answer is: ${sum}`);
}