
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = ''; 


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        
        if (value === '=') {

            try {
                currentInput = eval(currentInput); 
            } catch (error) {
                currentInput = 'Error'; 
            }
            display.innerText = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            display.innerText = '0';
        } else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});

document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    display.innerText = '0';
});
