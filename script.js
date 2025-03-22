let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const multiplyCounterButton = document.getElementById('multiplyByTwo')
const clearButton = document.getElementById('clearButton');

incrementButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
})

decrementButton.addEventListener('click', () => {
    count--;
    if (count < 0){
        count = 0;
        counterDisplay.textContent = count;
    } else {
    counterDisplay.textContent = count;
    }
});

multiplyCounterButton.addEventListener('click', () => {
    count = count * 2;
    counterDisplay.textContent = count;
});

clearButton.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
});