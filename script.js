const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");

const cashGivenDiv = document.querySelector(".cashGivenDiv");
const tableOutput = document.querySelector(".tableOutput")

const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener ("click", ()=> {
    hideErrorMessage();
    if(billAmount.value > 0) {
        
        nextButton.style.display = "none";
        cashGivenDiv.style.display = "block";
        billAmount.readOnly = true;
        
    } else {
        errorMessageShown("Bill amount should be greater than 0");
    }
});

checkButton.addEventListener("click", function validateBillandCashAmount(){
    hideErrorMessage();
    if(billAmount.value >0 && cashGiven.value > 0) {

        if (cashGiven.value > billAmount.value) {

            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else if (cashGiven.value === billAmount.value) {
            errorMessageShown("Cash given = bill amount. No change.");
            clearNoOfNotes();
        }
        else {

            errorMessageShown("Cash given cannot be less than bill amount.");
            clearNoOfNotes();
        }

    }else{
        errorMessageShown("Enter valid cash given to continue");
        clearNoOfNotes();
    }

});

function calculateChange(amountToBeReturned){

    for(let i=0; i < availableNotes.length; i++) {
        tableOutput.style.display = "block";

        const numberOfNotes = Math.trunc(amountToBeReturned /availableNotes[i]);

        amountToBeReturned  = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function errorMessageShown (errormsg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = errormsg;
}

function hideErrorMessage () {
    errorMessage.style.display = "none";
}

function clearNoOfNotes () {
    for (let i=0; i<noOfNotes.length; i++) {
        noOfNotes[i].innerText= "";
    }
}