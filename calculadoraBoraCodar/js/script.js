const buttons = document.querySelectorAll('.key-item');
const display = document.querySelector('.calc_display');


const clearDisplay = () => {
    display.value = '';
}

const clearLastNumber = () => {
    let content = display.value;
    if (content != ''){
        let lastNumber = content.slice(-1);
        content = content.replace(lastNumber,'');
        display.value = content;
    }
}

const setNumber = (num) => {
    if (display.value == 0){
        clearDisplay();
    }
    display.value = display.value + num;
}


const setOp = (op) => {
    localStorage.setItem('num1',display.value);
    localStorage.setItem('op',op);
    clearDisplay();
};

const equalNumber = () => {
    num1 = parseInt(localStorage.getItem('num1'));
    num2 = parseInt(display.value);
    op = localStorage.getItem('op');

    switch(op){
        case '+':
            display.value = num1 + num2;
            break;
        case '/':
            display.value = num1 / num2;
            break;
        case '*':
            display.value = num1 * num2;
            break;
        case '-':
            display.value = num1 - num2;
            break;
    }
}

buttons.forEach(element => {
    element.addEventListener('click', () => {
        let buttonPressed = element.innerHTML;
        switch(buttonPressed){
            case 'CE':
                clearDisplay();
                break;
            case 'C':
                clearLastNumber();
                break;
            case '9':
                setNumber('9');  
                break;
            case '8':
                setNumber('8');  
                 break;
            case '7':
                setNumber('7');  
                break;
            case '6':
                setNumber('6');  
            break; 
            case '5':
                setNumber('5');  
                break;
            case '4':
                setNumber('4');  
                break;
            case '3':
                setNumber('3');  
                break;
            case '2':
                setNumber('2');  
                break;
            case '1':
                setNumber('1');  
                break;            
            case '/':
                setOp('/');
                break;
            case '+':
                setOp('+');
                break;
            case '*':
                setOp('*');
                break;
            case '-':
                setOp('-');
                break;
            case '=':
                equalNumber();
                break;
            default:
                'Wait';
                break;
        };
    });
});

