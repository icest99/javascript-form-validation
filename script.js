// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const errorAlert = document.querySelector(".errors")
const errorList = document.querySelector(".errors-list")
const regForm = document.querySelector("#form")

let errorArray = []

regForm.addEventListener("submit", e => {
  
  const userName = document.getElementById("username").value
  const passWord = document.getElementById("password").value
  const passWordCon = document.getElementById("password-confirmation").value
  const formCheckbox = document.getElementById("terms").checked

  errorArray = []

  if (userName.length < 6) {
    errorArray.push("Ensure the username is at least 6 characters long")
  }
  if (passWord.length < 10) {
    errorArray.push("Ensure the password is at least 10 characters long")
  }
  if (passWordCon !== passWord) {
    errorArray.push("Ensure the password and confirmation password match")
  }
  if (formCheckbox !== true) {
    errorArray.push("Ensure the terms checkbox is checked")
  }

  clearErrors()
  showErrors(errorArray)

  if (errorArray.length !== 0) {
    e.preventDefault();
  }
})


//clear errors that was displayed on page (remove li tags & remove class "show"). prevent it from accumulating when submit multiple time
function clearErrors() {

  while (errorList.children.length !== 0) {
    let errorListli = errorList.firstElementChild
    errorListli.remove()
    errorArray.shift
    
    if (errorArray.length === 0) {
      errorAlert.classList.remove("show")
    }
  }
  
}

// add class "show" which change to display: block from display: none
function showErrors(errorMessages) {

  errorMessages.forEach((m) => {
    const li = document.createElement("li")
    li.textContent = m
    errorList.append(li)
  })

  if (errorArray.length !== 0) {
    errorAlert.classList.add("show")
  }
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
}