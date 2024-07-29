// Task1-
function cubeArray(arr) {
    return arr.map(num => num ** 3);
}

const numbers1 = [1, 2, 3, 4];
console.log(cubeArray(numbers1));

//Task 2- 
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

const numbers2 = [1, 2, 3, 4];
console.log(sumArray(numbers2));

//Task 3-
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterPrimes(numbers3));

//Task 4-
function averageOfSquaredOdds(arr) {
    const squaredOdds = arr.filter(num => num % 2 !== 0).map(num => num ** 2);
    const sumOfSquaredOdds = squaredOdds.reduce((acc, num) => acc + num, 0);
    return squaredOdds.length ? sumOfSquaredOdds / squaredOdds.length : 0;
}

const numbers4 = [1, 2, 3, 4, 5];
console.log(averageOfSquaredOdds(numbers4));


//Task 5-
function longestString(arr) {
    return arr.reduce((longest, str) => str.length > longest.length ? str : longest, '');
}

const strings = ["apple", "banana", "cherry", "date"];
console.log(longestString(strings));

//Task 6-
function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const sentence = "hello world from javascript";
console.log(capitalizeFirstLetter(sentence));

//Task 7-
function passedStudents(students) {
    return students.filter(student => student.score >= 60);
}

const students = [
    { name: 'Alice', score: 58 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 62 }
];
console.log(passedStudents(students));

//Task 8-
function createInstanceCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());

//Task 9-
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case 'addition':
                resolve(num1 + num2);
                break;
            case 'subtraction':
                resolve(num1 - num2);
                break;
            case 'multiplication':
                resolve(num1 * num2);
                break;
            case 'division':
                if (num2 === 0) {
                    reject(new Error("Division by zero"));
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject(new Error("Invalid operation"));
        }
    });
}

calculator(10, 5, 'addition')
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

calculator(10, 0, 'division')
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

//Task 10-
function totalScore(arr) {
    let total = 0;
    arr.forEach(obj => {
        total += obj.score;
    });
    return total;
}

const scores = [
    { score: 10 },
    { score: 20 },
    { score: 30 }
];
console.log(totalScore(scores));
