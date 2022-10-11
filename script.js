
// take a string and two numbers to be used, return result
function operate(op, num1, num2) {

    // place given nums in array
    let numsToOperate = [num1, num2];

    //define the available operators and the result they return
    const operators = {
        "+": {
            result: numsToOperate.reduce((x, y) => x + y)
        },
        "-": {
            result: numsToOperate.reduce((x, y) => x - y)
        },
        "x": {
            result: numsToOperate.reduce((x, y) => x * y)
        },
        "÷": {
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

// store an object of all selected inputs
let selectedInputs = {
    firstInput: undefined,
    operator: undefined,
    secondInput: undefined,
    result: undefined
};


/////// NUMBER BUTTONS //////
////// when a num button is clicked, display it on the calcuator /////

// get an array of all of the number buttons
const numBtns = document.getElementsByClassName('btn num');

// store the current number
let currNum;

// store an array of all selected num inputs
let numInputs = [0];


///// DISPLAY 

// select the display div itself
const divDisplay = document.querySelector('.display');

// store the currently entered number in its own div
const currentNumDiv = document.createElement("div");
currentNumDiv.classList.add("currentNum");
divDisplay.appendChild(currentNumDiv);
currentNumDiv.textContent = "0";

// store the first DISPLAYED number 
let firstDisplayNum = "";

// store the last DISPLAYED number
let lastNumDisplay = "";

// loop through all number buttons, assign event listeners
for (let i = 0; i < numBtns.length; i++) {
    // get text content of current button
    const rawNum = numBtns[i].textContent;

    // when button is clicked
    numBtns[i].addEventListener("click", () => {
        // add current DISPLAYED number to div display's text content
        displayNum += rawNum;
        currentNumDiv.textContent = displayNum;

        // push to array
        numInputs.push(rawNum);
        console.log(numInputs);
    })

}


// function to convert the current typed number from the display into an actual number 
function convertArrayToNum(array) {
    let jointArray = array.join();
    let noCommas = jointArray.replace(/,/g, '');
    // will return NaN if no number is entered!!!!
    let result = parseFloat(noCommas);;
    if (isNaN(result)) {
        return undefined;
    }
    else {
        return result;
    }
}

//////// DECIMAL BUTTON //////////

// get decimal button by id
const decimalBtn = document.getElementById('decimal');


///// OPERATOR BUTTONS /////
// event listeners for all operation functions (sum, subtract, etc.)

// get an array of all of the operator buttons
const opBtns = document.getElementsByClassName('btn operator');

// loop through all operator buttons, assign event listeners
for (let i = 0; i < opBtns.length; i++) {
    // get current operator
    const currOp = opBtns[i].textContent;
    // when button is clicked
    opBtns[i].addEventListener("click", () => {
        // update selected operator
        selectedInputs.operator = currOp;
        console.log(numInputs);
        switch (true) {
            // if first input is empty....
            case (selectedInputs.firstInput == undefined):

                // if there is a value present in numInputs... **and that last value isnt a decimal or an operator (seperate function?)
                if (numInputs.length > 0) {

                    // take first num, convert value to number
                    let firstNum = convertArrayToNum(numInputs);
                    // update object list
                    selectedInputs.firstInput = firstNum;

                    // clear numInputs;
                    numInputs = [0];

                }
                break;

            // if first input has value and second does not..
            case (selectedInputs.firstInput != undefined && selectedInputs.secondInput == undefined):

                // if there is a value present in numInputs...
                if (numInputs.length > 0) {
                    // take second num, put into variable
                    let secondNum = convertArrayToNum(numInputs);

                    // update object list 
                    selectedInputs.secondInput = secondNum;

                    // execute operation, store in result
                    selectedInputs.result = operate(selectedInputs.operator, selectedInputs.firstInput, selectedInputs.secondInput);

                    // replace first input with result
                    selectedInputs.firstInput = selectedInputs.result;

                    // display result in lower div
                    firstDisplayNum = selectedInputs.result;
                    currentNumDiv.textContent = firstDisplayNum;

                    // clear numInputs;
                    numInputs = [0];

                    // return result
                    console.log(selectedInputs.result);


                    // reset second input
                    selectedInputs.secondInput = undefined;

                    // reset result
                    selectedInputs.result = undefined;

                    // clear numInputs;
                    numInputs = [];

                }

                break;

            default:

                console.log("oops!");

                break;
        }

    })
}

/// EQUALS BUTTON

// get equals button by id
const equalsBtn = document.getElementById('equals');

equalsBtn.addEventListener("click", () => {

    // check if num Input and operand are present!
    if (numInputs.length > 0 && selectedInputs.operator != undefined) {
        // grab second num
        let secondNum = convertArrayToNum(numInputs);

        // update object list 
        selectedInputs.secondInput = secondNum;

        // execute operation, store in result
        selectedInputs.result = operate(selectedInputs.operator, selectedInputs.firstInput, selectedInputs.secondInput);

        // replace first input with result
        selectedInputs.firstInput = selectedInputs.result;

        // display result in lower div
        firstDisplayNum = selectedInputs.result;
        currentNumDiv.textContent = firstDisplayNum;

        // return result
        console.log(selectedInputs.result);

        // reset second input
        selectedInputs.secondInput = undefined;

        // reset result
        selectedInputs.result = undefined;

        // clear numInputs;
        numInputs = [0];
    }


})

// CLEAR BUTTON

// grab clear button
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", () => {

    // reset all keys in selectedInputs
    for (let key in selectedInputs) {
        key = undefined;
    }

    // clear numInputs
    numInputs = [];

    // clear displayNum + text content of display


})



})