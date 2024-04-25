//Завдання 1
function random(number, number2){
let randomnumber = Math.random();

return number + randomnumber * (number2 - number);
};

console.log(random(1,5));
console.log(random(1,5));
console.log(random(1,5));
//Завдання 2
function isPrime(number){
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(1));
console.log(isPrime(10));
console.log(isPrime(5));
//Завдання 3
function recursivesum(max){
if (max<0){
let number = 0
for (let i = max; i<=0; i++){
number += i;
};
return number;
};
let number = 0
for (let i = 1; i<=max; i++){
    number += i;
    };
    return number;
};


console.log(recursivesum(5));
console.log(recursivesum(-3));
console.log(recursivesum(15));