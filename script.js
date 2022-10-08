
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
/////// NUMBER BUTTONS //////
////// when a num button is clicked, display it on the calcuator /////

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

// function to convert the current typed number from the display into an actual number 
function convertArrayToNum(array) {
    let jointArray = array.join();
    let noCommas = jointArray.replace(/,/g, '');
    return Number(noCommas);
}


///// OPERATOR BUTTONS /////
// event listeners for all operation functions (sum, subtract, etc.)

//// EQUAL BUTTON ////
// grab equal button
const equalBtn = document.getElementById('equals');
// bool if equals has been clicked lol
let equalsClicked = false;

equalBtn.addEventListener("click", () => {
    equalsClicked = true;
})


/// ADD BUTTON ////
// get add button
const addBtn = document.getElementById('sum');
// count how many times add btn has been clicked
let addBtnCount = 0;
// store first and last displayed numbers
let lastDisplayNum = 0;
let secondDisplayNum = 0;
// store sum of two numbers
let displaySum = 0;

addBtn.addEventListener("click", () => {
    // track how many times button is clicked
    ++addBtnCount;
    // if addbtn has been clicked only once...
    if (addBtnCount == 1) {
        if (lastDisplayNum == 0) {
            //grab the last displayed number
            lastDisplayNum = convertArrayToNum(displayedNums);
        }
        else {
            // grab second number entered 
            secondDisplayNum = convertArrayToNum(displayedNums);
        }
        // clear display and displayedNums array
        displayNum = ""
        divDisplay.textContent = displayNum;
        displayedNums = [];
    } // make sure to check if displayednums isnt null...
    else if (addBtnCount >= 2) {
        // grab second number entered 
        secondDisplayNum = convertArrayToNum(displayedNums);
        // clear display and displayedNums array
        displayNum = ""
        divDisplay.textContent = displayNum;
        displayedNums = [];
        // add it to previous using operation
        let displaySum = operate("sum", secondDisplayNum, lastDisplayNum);
        // return final result in display
        displayNum = displaySum;
        divDisplay.textContent = displayNum;
        // clear displayedNums
        displayedNums = [];
    }


})



// when any operation is called..







// create clear function (clears display, calculated former and current values)

// add event listener for clear function

