//Завдання 1
function ucFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst('privet'))
//Завдання 2
function checkSpam(str){
    return str.includes('росі') || str.includes('xxx');
}

console.log(checkSpam('поїхати до росії'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))
//Завдання 3
function truncate(str, maxlength){
    if (str.length<=maxlength){
        return str;
    }

    return str.slice(0,maxlength-1) + '...';
}

console.log(truncate('Що я хотів би розповісти на цю тему:',20))
console.log(truncate('Всім привіт!',20))
//Завдання 4
function strikeStr(str){
    const words = str.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
        if ((currentLine + word).split(' ').length <= 2) {
            currentLine += (currentLine ? ' ' : '') + word;
        } else {
            lines.push(currentLine.trim());
            currentLine = word;
        }
    }

    if (currentLine) {
        lines.push(currentLine.trim());
    }

    return lines.join('\n');
}

console.log(strikeStr('Що я хотів би розповісти на цю тему:'))
console.log(strikeStr('Всім привіт!'))