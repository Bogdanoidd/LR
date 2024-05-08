//Завдання 1
function unique(arr) {
    return Array.from(new Set(arr));
}

let arr = ["Hare", "Krishna", "Hare", "Krishna", "Hare",
 "Krishna", "Hare", "Hare", ":-0"];
console.log(unique(arr)); 
//Завдання 2
function aclean(arr) {
    let Words = {}; 

    for (let word of arr) {
        let Word = word.split('').sort().join('').toLowerCase();

        if (Words.hasOwnProperty(Word)) continue;

        Words[Word] = word;
    }

    return Object.values(Words);
}

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr2)); 
//Завдання 3
function countOcurrences(numbers){
    let Map1 = new Map(); 

    for (let num of numbers) {
        Map1.set(num, Map1.has(num) ? Map1.get(num) + 1 : 1);
    }

    return Map1; 
}

const numbers = [1,2,3,4,2,1,3,5,6,5];
const result = countOcurrences(numbers);
console.log(result)
//Завдання 4
function areAllUnique(rrr){
    for (let i = 0; i < rrr.length; i++) {
        for (let j = i + 1; j < rrr.length; j++) {
            if (rrr[i] === rrr[j]) {
                return false; 
            }
        }
    }
    return true; 
}

const uniqueArray = [1,2,3,4,5];
const hasDuplicates = areAllUnique(uniqueArray);
console.log(hasDuplicates);

const arrayWithDuplicates = [1,2,3,2,4,5];
const hasDuplicates2= areAllUnique(arrayWithDuplicates);
console.log(hasDuplicates2);


