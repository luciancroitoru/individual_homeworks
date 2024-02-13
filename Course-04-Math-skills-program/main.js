console.log(`Math Skills Program`);


//exercise 4
let numberCorrectAnswers =0;
let answerSum;
let sum;

do{
    let a = Math.floor(Math.random() * 99 + 1);
    let b = Math.floor(Math.random() * 99 + 1);
    console.log(`Random number a: ${a}`);
    console.log(`Random number b: ${b}`);

    sum = a + b;

    answerSum = prompt(`What is the sum between ${a} and ${b}?`);
    answerSum = Number(answerSum);

    if (answerSum == sum){
        numberCorrectAnswers++;
        console.log(`your attempt was correct`)
    //break;
    }
} while(answerSum == sum);

console.log(`The number of consecutive correct answers was: ${numberCorrectAnswers}`);


//exercise 3
//Prompt the user with different values until he fails. Display the number of correct answers.
/*
let sum;
let answerSum;
let correctAnswers = 0;

for (let i = 0; i < 9; i++) {
    let a = Math.floor(Math.random() * 99 + 1);
    let b = Math.floor(Math.random() * 99 + 1);
    console.log(`Random number a: ${a}`);
    console.log(`Random number b: ${b}`);

    let sum = a + b;
    answerSum = prompt(`What is the sum between ${a} and ${b}?`);
    console.log(`Sum is: ${sum}`);
    console.log(`Your answer was: ${answerSum}`);
    if (answerSum == sum){
        correctAnswers = correctAnswers + 1;
    }
}
let percentageCorrectAnswers = (correctAnswers/ 10) * 100;
console.log(`${percentageCorrectAnswers}%`);
*/


// exercise 2
// If the user provides an invalid number, don't display the correct answer, but keep prompting him for another answer until it is correct.
/*
if(answerSum == sum){
    console.log(`Your answer is correct`);
} else{
    do{
        answerSum = prompt(`Your answer is incorrect. What is the sum between ${a} and ${b}?`);
        answerSum = Number(answerSum);
        if (answerSum == sum)
            {console.log(`your new attempt is correct`)
        //break;
        }
    } while(answerSum != sum);
}
*/


/*1st exercise 
// if answer is correct alert user it is correct, otherwise let him know which the correct answer is
if(answerSum == sum){
    alert(`Your answer is correct`);
} else {
    alert(`Your answer is incorrect. The correct answer is: ${sum}`);
}
*/