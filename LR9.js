const value = document.getElementById('value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let count = 0;

function Counter() {
    value.textContent = count;

    if (count < 0) {
        value.style.color = 'red';
    } else if (count === 0) {
        value.style.color = '#000'; 
    } else {
        value.style.color = 'green';
    }
}

decrease.addEventListener('click', () => {
    count--;
    Counter();
});

reset.addEventListener('click', () => {
    count = 0;
    Counter();
});

increase.addEventListener('click', () => {
    count++;
    Counter();
});

Counter();
