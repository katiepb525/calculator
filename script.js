
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

// when a num button is clicked, display it on the calcuator

// get an array of all of the number buttons
const numBtns = document.getElementsByClassName('btn num');
// loop through all the number buttons and add an event listener to each
for (i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", () => console.log("i work"));
}
