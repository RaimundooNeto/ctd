//Aula 16 - Arrow function

function isMultiple(number1, number2) {
    let message = '';

    for(let i = 0; i <= 100; i++) {
        if(i % number1 == 0) {
            message += 'Fizz';
        }
        if(i % number2 == 0) {
            message += 'Buzz'
        }
        console.log(i, message);
        message = '';
    }
}

isMultiple(2,3);