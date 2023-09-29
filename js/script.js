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
    //otherJobRole.style.visibility='hidden';
    //otherJobRole.removeAttribute('style[display: block]');
    otherJobRole.style.display = "none";
    otherJobRole.hidden = "true";
    //otherJobRole.display='none'
  }
});

//Allows user to access colors available depending on design chosen
const designSelectElement = document.querySelector("#design");
const colorSelectElement = document.querySelector("#color");
const colorOptions = colorSelectElement.children;

colorSelectElement.disabled = "true";

designSelectElement.addEventListener("change", (event) => {
  //colorSelectElement.disabled='false';
  colorSelectElement.removeAttribute("disabled");
  for (let i = 1; i < colorOptions.length; i++) {
    const designTheme = event.target.value;
    const colorTheme = colorSelectElement[i].getAttribute("data-theme");

    //Displays colors available if theme matches
    if (colorTheme == designTheme) {
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

//paymentMethod.children.setAttribute('hidden', true);
//displays payment method selected and hides unselected options
paymentMethod.addEventListener("change", (e) => {
  const paymentSelection = e.target.value;
  console.log(paymentSelection);

  if (paymentSelection == "credit-card") {
    creditCard.style.display = "block";
    payPal.style.display = "none";
    bitcoin.style.display = "none";
  } else {
    creditCard.style.display = "none";
    paymentMethod.style.display = "block";
  }
});

const form = document.querySelector("form");
const email = document.querySelector("#email");
const cardNumber = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");

//validation of input fields
form.addEventListener("submit", (event) => {
  const nameValue = nameElement.value;
  const emailValue = email.value;
  const cardValue = cardNumber.value;
  const zipValue = zipCode.value;
  const cvvValue = cvv.value;

  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  const cardIsValid = /^\d{13,16}$/.test(cardValue);
  const zipIsValid = /^\d{5}$/.test(zipValue);
  const cvvIsValid = /^\d{3}$/.test(cvvValue);

  //Calls visual validation function
  visualValidation(nameIsValid, nameElement);
  visualValidation(emailIsValid, email);
  visualValidation(cardIsValid, cardNumber);
  visualValidation(zipIsValid, zipCode);
  visualValidation(cvvIsValid, cvv);

  if(!nameIsValid || !emailIsValid || !cardIsValid || !zipIsValid || !cvvIsValid){
    event.preventDefault();
  }

  if (nameIsValid){
    console.log('name is valid')
  } if (emailIsValid){
    console.log(`email is valid`);
  } if (cardIsValid){
    console.log(`card is valid`);
  } if (zipIsValid){
    console.log(`zip is valid`);
  } if (cvvIsValid) {
    console.log(`cvv is valid`);
  } else {
    event.preventDefault();
  }

  
});

// This function add or removes valid class depending on validation
function visualValidation(elementIsValid, element) {
  if (elementIsValid) {
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display='none';
  }
  if (!elementIsValid) {
    element.parentElement.classList.add(".not-valid");
    element.parentElement.classList.remove("valid");
    element.parentElement.lastElementChild.style.display = "block";
   
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
