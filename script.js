let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Replace x² with Math.pow for square calculation
        let expression = display.value.replace(/(\d+)\*\*2/g, 'Math.pow($1, 2)');
        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
