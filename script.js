// Function Declaration

function Calculation(numberA, numberB) {
    const sum = (numberA * numberA) + (numberB * numberB);
    const totalsDeclaration = sum * sum;
    return totalsDeclaration;
}

const resultDeclaration = Calculation(4, 5);
console.log(resultDeclaration);

//Function Expression

const calculation = function (numberA, numberB) {
    const sum = (numberA * numberA) + (numberB * numberB);
    const totalsExpression = sum * sum;
    return totalsExpression;
};

const resultExpression = calculation(4, 5);
console.log(resultExpression);

//Arrow Function

const calculations = (numberA, numberB) => {
    const sum = (numberA * numberA) + (numberB * numberB);
    const totalsArrow = sum * sum;
    return totalsArrow;
};

const resultArrow = calculations(4, 5);
console.log(resultArrow);