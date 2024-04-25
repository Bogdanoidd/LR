//Завдання 1
let user = {};
user.name = 'Mark';
user.surname = 'Smith';
user.name = 'Taras' ;
delete user.name;
console.log(user);
//Завдання 2
function isEmpty(obj) {
    let keys = Object.keys(obj);
    return keys.length === 0;
}

let obj = {};
console.log( isEmpty(obj));
obj.number = 123;
console.log( isEmpty(obj));

//Завдання 3
let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
    }
let sum = 0;
sum+= salaries.Jarik
sum+= salaries.Anna
sum+= salaries.Miko
console.log(sum);
//Завдання 4
function multiplyNumeric(obj){
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
}

multiplyNumeric(menu);
console.log(menu)

