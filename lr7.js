//Завдання 1
function sumSalaries(salaries){
    let sum = 0;

    let salary = Object.values(salaries);

    for (let salar of salary) {
        sum += salar;
    }

    return sum;
};


let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

console.log(sumSalaries(salaries));
//Завдання 2

function count(user){
    return Object.keys(user).length;
};

let user = {
    name: 'Іван',
    age: 30
};

console.log(count(user));
//Завдання 3

let userr = {name: "Іван", years: 30};

let {name, years: age, isAdmin = false } = userr;
console.log(name);
console.log(age);
console.log(isAdmin);