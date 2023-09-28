console.log("Test");

// Name Field
// When the page first loads, the first text field should have the focus state by default to prompt the user.

// Use the focus() method on the <input type="text"> element for the "Name" field.

document.querySelector("#name").focus();

/*Job Role Section
The "Job Role" section has an <input type="text"> field where users can enter a custom job role. If the user selects "Other" in the "Job Role" drop-down menu, they can enter info into the "Other job role" text field. This field should be hidden by default and only be displayed if "Other" is selected in the drop-down menu.

Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.*/


//const otherJobSelected = document.querySelector('option[value="Other"]');
//Program the "Job Role" <select> element to listen for changes. When a change is detected, display/hide the "text field" based on the selection in the drop-down menu.

const jobRoleSelect = document.querySelector("#title");
const otherJobRole = document.querySelector('#other-job-role');

//hides "other job role" text box by default
otherJobRole.hidden='true';

console.log(jobRoleSelect);
console.log(otherJobRole);

jobRoleSelect.addEventListener("change", (e) => {
   console.log(`you selected: ${e.target.value}`);


    if (e.target.value == "other") {
      otherJobRole.style.display="block"
      otherJobRole.hidden='false';
      
    } else {
      otherJobRole.style.visibility='hidden';
      otherJobRole.hidden='true';
      //otherJobRole.display='none'
    }
});

//design select element
const designSelectElement = document.querySelector('#design');
console.log(designSelectElement);

const colorSelectElment = document.querySelector('#color');
console.log(colorSelectElment);
//color select element

//


