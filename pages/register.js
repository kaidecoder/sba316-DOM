const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".btn");

const form = document.getElementById("form");
let password = form.elements["password"];
let cpassword = form.elements["cpassword"];

const patterns = {
  firstname: /^[a-zA-Z]+(-[a-zA-Z]+)*{1,}$/,
  lastname: /^[\s\w]{1,}$/,
  email: /^[\w._+-]+@[\w.-]+\.[\w]{2,6}$/,
  password: /^[a-z]{8,}$/,
  cpassword: /^[a-z]{8,}$/,
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.setCustomValidity("valid");
  } else {
    field.setCustomValidity("invalid");
  }
  field.reportValidity();
}

Array.from(inputs).forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target)
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// console.log(password === cpassword);

// let patternsCopy = JSON.parse(JSON.stringify(patterns));
// console.log(patternsCopy);

// if (patternsCopy.password === patternsCopy.cpassword) {
//   console.log(
//     `The password of ${patternsCopy.password} and the cpassword of ${patternsCopy.cpassword} are both equal`,
//   );
// } else {
//   console.log("They are both odd");
// }

// // console.log(isEqual(password, cpassword)

// // .isEqual(patterns.password === patterns.cpassword)
