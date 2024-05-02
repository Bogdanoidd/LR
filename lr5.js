//Завдання 1
let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push('Rock-n-Roll')
console.log(styles);
styles[Math.floor(styles.length / 2)]="Classics";
console.log(styles);
console.log("Видалений елемент:", styles.shift());
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

//Завдання 2
function sumInput(){
    let numbers = []; 

    while (true) {
        let input = prompt("Будь ласка, введіть число:");

        if (input === "" || input === null || !isFinite(input)) {
            break; 
        }
        numbers.push(+input); 
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}
let itog= sumInput();
alert(itog);

//Завдання 3
function getMaxSubSum(arr){
    let maxSum = 0;
    let Sum = 0;

    for (let item of arr) {
        Sum += item;
        maxSum = Math.max(maxSum, Sum);
        if (Sum < 0) {
            Sum = 0;
        }
    }

    return maxSum;
};
console.log(getMaxSubSum([-1,2,3,-9]));
console.log(getMaxSubSum([2,-1,2,3,-9]));
console.log(getMaxSubSum([-1,2,3,-9,11]));
console.log(getMaxSubSum([-2,-1,1,2]));
console.log(getMaxSubSum([100,-9,2,-3,5]));
console.log(getMaxSubSum([1,2,3]));
console.log(getMaxSubSum([-1,-2,-3]));

