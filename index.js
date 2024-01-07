
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let calculateBtn  = document.getElementById("calculateAge");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    if(userInput.value == "") {
        alert("Please Enter Your Birthday")
    }else {
        // console.log("input", userInput.value);
        const dob = new Date(userInput.value);
        // console.log("dob", dob);
        const dobYear = dob.getFullYear();
        // console.log("dobYear", dobYear);

        // current 

        const curr = new Date();
        // console.log("curr", curr);
        const currYear = curr.getFullYear();
        // console.log("currYear", currYear);

        const currAge = currYear - dobYear;
        // console.log("currAge", currAge);

        result.innerHTML = `Your age is ${currAge} years old`;
    }
})

