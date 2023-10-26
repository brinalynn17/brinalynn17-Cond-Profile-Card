// Get the input elements by their IDs
const includeCoverInput = document.getElementById("includeCover")
const fNameInput = document.getElementById("fName");
const lNameInput = document.getElementById("lName");

const includeCoverSpan = document.getElementById("Include_Cover")
const firstNameSpan = document.getElementById("First_Name");
const lastNameSpan = document.getElementById("Last_Name");

function bindText(input, textElement) {
    input.addEventListener("input", ()=>{
        textElement.innerText = input.value
    })
}

bindText(includeCoverInput, includeCoverSpan)
bindText(fNameInput, firstNameSpan)
bindText(lNameInput, lastNameSpan)

// Add an event listener to listen for changes in the input fields
// fNameInput.addEventListener("input", updateFirstName);
// lNameInput.addEventListener("input", updateLastName);

// // Function to update the first name in the span
// function updateFirstName() {
//     firstNameSpan.textContent = fNameInput.value;
// }

// // Function to update the last name in the span
// function updateLastName() {
//     lastNameSpan.textContent = lNameInput.value;
// }