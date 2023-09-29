//Cursor on the name field when it first loads
const nameElement = document.querySelector("#name");
nameElement.focus();

//Job Role Section
const jobRoleSelect = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");

//hides "other job role" text box by default
otherJobRole.hidden = "true";

//if other is selected, text box is displayed
jobRoleSelect.addEventListener("change", (e) => {
  if (e.target.value == "other") {
    otherJobRole.style.display = "block";
    otherJobRole.removeAttribute("hidden");
  } else {
    otherJobRole.style.display = "none";
    otherJobRole.hidden = "true";
    //otherJobRole.display='none'
  }
});

//Allows user to access colors available depending on design chosen
const designSelectElement = document.querySelector("#design");
const colorSelectElement = document.querySelector("#color");
const colorOptions = colorSelectElement.children;

colorSelectElement.disabled = true;

designSelectElement.addEventListener("change", (event) => {
  //colorSelectElement.disabled='false';
  colorSelectElement.removeAttribute("disabled");

  
  for (let i = 1; i < colorOptions.length; i++) {
    const designTheme = event.target.value;
    const colorTheme = colorSelectElement[i].getAttribute("data-theme");
    //<select id="color">
    //<option selected hidden>Select a design theme above</option>


    //Displays colors available if theme matches
    if (colorTheme == designTheme) {
      colorSelectElement[0].selected=true;
      colorSelectElement[i].removeAttribute("hidden");
    } else {
      colorSelectElement[i].hidden = true;
    }
  }
});

const activities = document.querySelectorAll("#activities input");
//why don't I need input after activities?"
const total = document.querySelector("#activities-cost");
let totalCost = 0;

//activities.addEventListener("change", () => {
//Adds cost of activity checked and provides a total
document.querySelector(".activities").addEventListener("change", (e) => {
  const checkedActivity = e.target;
  const checkedActivityCost = +checkedActivity.getAttribute("data-cost");


  if (checkedActivity.checked) {
    //console.log(`checkedActivityCost ${checkedActivityCost}`);
    totalCost += checkedActivityCost;
    console.log(`Total: ${totalCost}`);
  } else {
    totalCost -= checkedActivityCost;
  }
  total.innerHTML = `Total: ${totalCost}`;
});

const creditCard = document.querySelector(".credit-card");
const payPal = document.querySelector(".paypal");
const bitcoin = document.querySelector(".bitcoin");
//why didn't the id work?

//sets default to credit card selection
const paymentMethod = document.querySelector("#payment");
paymentMethod[1].selected = "true";

creditCard.style.display = "block";
payPal.style.display = "none";
bitcoin.style.display = "none";

//displays payment method selected and hides unselected options
paymentMethod.addEventListener("change", (e) => {
  const paymentSelection = e.target.value;
  console.log(paymentSelection);

  if (paymentSelection == "credit-card") {
    creditCard.style.display = "block";
    payPal.style.display = "none";
    bitcoin.style.display = "none";
  } if(paymentSelection == "paypal") {
    payPal.style.display = "block";
    creditCard.style.display = "none";
    bitcoin.style.display = "none";
  } if(paymentSelection == "bitcoin") {
    bitcoin.style.display = "block";
    creditCard.style.display = "none";
    paypal.style.display = "none";
  }
});

const form = document.querySelector("form");
const email = document.querySelector("#email");
const cardNumber = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");

//validation of input fields
form.addEventListener("submit", (event) => {
 
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameElement.value);
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
  const cardIsValid = /^\d{13,16}$/.test(cardNumber.value);
  const zipIsValid = /^\d{5}$/.test(zipCode.value);
  const cvvIsValid = /^\d{3}$/.test(cvv.value);

  if(activities.checked == true){

  }
  

  if(!nameIsValid || !emailIsValid || !cardIsValid || !zipIsValid || !cvvIsValid){
    event.preventDefault();
  } else {
    
  }
   
  //Calls visual validation function
  visualValidation(nameIsValid, nameElement, 'name');
  visualValidation(emailIsValid, email, 'email');
  visualValidation(cardIsValid, cardNumber, 'cardNumber');
  visualValidation(zipIsValid, zipCode, 'zipCode');
  visualValidation(cvvIsValid, cvv, 'cvv');
  //visualValidation(formIsValid, form);
});

// This function add or removes valid class depending on validation
function visualValidation(elementIsValid, element, string) {
  if (elementIsValid) {
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display='none';
    console.log(`${string} is valid`);
   
  }
  if (!elementIsValid) {
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = "block";
    console.log(`${string} is NOT valid`);
  }
}

// Iterates through activities, so that when checked they trigger focus element on parent
for (let i = 0; i < activities.length; i++) {
  activities[i].addEventListener("focus", (e) => {
    //const checkedActivity = e.target;
    activities[i].parentElement.classList.add("focus");
  });
  activities[i].addEventListener("blur", (e) => {
    activities[i].parentElement.classList.remove("focus");
  });
}
