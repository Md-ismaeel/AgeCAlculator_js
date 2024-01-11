let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let calculateBtn = document.getElementById("calculateAge");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  if (userInput.value == "") {
    alert("please enter your birthday");
  } else {
    let curr = new Date();

    let dob = new Date(userInput.value);

    let dobYear = dob.getFullYear();

    let currYear = curr.getFullYear();

    let currAge = currYear - dobYear;
    console.log(currAge);

    let month = (curr.getMonth() - dob.getMonth() + 12) % 12;
    //   curr = jan, dateofmonth = march
    console.log(month);

    if (curr.getMonth() < dob.getMonth()) {
      currAge--;
    }

    let day = curr.getDate() - dob.getDate();
    // console.log(day);
      (result.innerHTML = `Your are ${currAge} years ${month} month and ${day} days old`);
  }
});
