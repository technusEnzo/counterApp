let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

incrementButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
})

decrementButton.addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
});