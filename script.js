
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
let numInputs = [];

// select the display div itself
const divDisplay = document.querySelector('.display');

// store the formerly entered numbers and operators in a div called "formerNumsList"
const formerNumsDiv = document.createElement("div");
formerNumsDiv.classList.add("formerNumsList");
divDisplay.appendChild(formerNumsDiv);
formerNumsDiv.style.fontSize = "14px"
// store the currently entered number in its own div
const currentNumDiv = document.createElement("div");
currentNumDiv.classList.add("currentNum");
divDisplay.appendChild(currentNumDiv);

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
        currentNumDiv.textContent = displayNum;
        // convert rawNum to number value
        currNum = Number(rawNum);
        // push to array
        numInputs.push(currNum);
        console.log(numInputs);
    })

}

// function to convert the current typed number from the display into an actual number 
function convertArrayToNum(array) {
    let jointArray = array.join();
    let noCommas = jointArray.replace(/,/g, '');
    // will return NaN if no number is entered!!!!
    let result = parseInt(noCommas);;
    if (isNaN(result)) {
        return undefined;
    }
    else {
        return result;
    }
}


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
        switch (true) {
            // if first input is empty....
            case (selectedInputs.firstInput == undefined):
                // take first num, convert value to number
                let firstNum = convertArrayToNum(numInputs);
                // update object list
                selectedInputs.firstInput = firstNum;
                // clear numInputs;
                numInputs = [];

                break;

            // if first input has value and second does not..
            case (selectedInputs.firstInput != undefined && selectedInputs.secondInput == undefined):

                // take second num, put into variable
                let secondNum = convertArrayToNum(numInputs);

                // update object list 
                selectedInputs.secondInput = secondNum;

                // execute operation, store in result
                selectedInputs.result = operate(selectedInputs.operator, selectedInputs.firstInput, selectedInputs.secondInput);







// create clear function (clears display, calculated former and current values)

// add event listener for clear function

