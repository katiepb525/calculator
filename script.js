
// take a string and two numbers to be used, return result
function operate(op, num1, num2) {

    // place given nums in array
    let numsToOperate = [num1, num2];
    //define the available operators and the result they return
    const operators = {
        sum: {
            result: numsToOperate.reduce((x, y) => x + y)
        },
        subtract: {
            result: numsToOperate.reduce((x, y) => x - y)
        },
        multiply: {
            result: numsToOperate.reduce((x, y) => x * y)
        },
        divide: {
            result: numsToOperate.reduce((x, y) => x / y)
        }
    }
    // check if op is valid
    let opIsValid;
    // check if op matches a key in the operators array
    for (let key in operators) {
        if (op === key) {
            opIsValid = true;
            break;
        }
        else {
            opIsValid = false;
        }
    }

    // generate error response
    const errorResponse = " i only accept sum, subtract, divide, and reduce.";

    return (opIsValid ? operators[op].result : errorResponse);

}

////// when a num button is clicked, display it on the calcuator

// get an array of all of the number buttons
const numBtns = document.getElementsByClassName('btn num');

// store the current number
let currNum;

// store an array of all previous selected numbers
let displayedNums = [];

// select the display div itself
const divDisplay = document.querySelector('.display');
// store the current DISPLAYED number 
let displayNum = "";

// loop through all number buttons, assign event listeners
for (let i = 0; i < numBtns.length; i++) {
    // get text content of current button
    const rawNum = numBtns[i].textContent;

    // when button is clicked
    numBtns[i].addEventListener("click", () => {
        // add current DISPLAYED number to div display's text content
        displayNum += rawNum;
        divDisplay.textContent = displayNum;

        // convert rawNum to number value
        currNum = Number(rawNum);
        // push to array
        displayedNums.push(currNum);
    })

}
