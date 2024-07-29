document.addEventListener('DOMContentLoaded', () => {
    const calculatorScreen = document.querySelector('.calculator-screen');
    const calculatorKeys = document.querySelector('.calculator-keys');

    calculatorKeys.addEventListener('click', (event) => {
        const { target } = event;
        const { value } = target;

        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case '=':
                try {
                    calculatorScreen.value = eval(calculatorScreen.value);
                } catch {
                    calculatorScreen.value = 'Erro';
                }
                break;
            case 'AC':
                calculatorScreen.value = '';
                break;
            case 'sin':
                calculatorScreen.value = Math.sin(eval(calculatorScreen.value));
                break;
            case 'cos':
                calculatorScreen.value = Math.cos(eval(calculatorScreen.value));
                break;
            case 'tan':
                calculatorScreen.value = Math.tan(eval(calculatorScreen.value));
                break;
            case 'log':
                calculatorScreen.value = Math.log10(eval(calculatorScreen.value));
                break;
            default:
                calculatorScreen.value += value;
        }
    });
});
