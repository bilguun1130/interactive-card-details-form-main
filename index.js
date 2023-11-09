var cleave = new Cleave('.number', {
    blocks:[4,4,4,4],
    uppercase:true
});
var monthCleave = new Cleave('#exp-month', {
    numeral: true,
});
var yearCleave = new Cleave('#exp-year', {
    numeral: true,
});
var cvcCleave = new Cleave('#cvc', {
    numeral: true,
});
const myForm = document.getElementById("form");
console.log(myForm);
var allTrue = 0;
var howManyCard = 0;
const thankYou = document.getElementsByClassName("thank-you")[0];
myForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (allTrue == 3){
        console.log("hello");
        myForm.classList.add("hide");
        thankYou.classList.remove("hide"); 
    }
});

myForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (allTrue == 3){
        console.log("hello");
        myForm.classList.add("hide");
        thankYou.classList.remove("hide"); 
    }
});

function validateCardNumber() {
    var cardNumber = document.getElementById("number");
    var cardClass = document.getElementsByClassName("error")[0];
    var regex ="^[0-9 ]*$";
    if (!cardNumber.value.match(regex)) {
        cardClass.classList.remove("hide");
        cardNumber.classList.add("error-state");
    } else {
        cardClass.classList.add("hide");
        cardNumber.classList.remove("error-state");
        document.getElementsByTagName("h2")[0].innerHTML = cardNumber.value;
        if(allTrue < 3) {
            validateCardLength();
        }
        
    }
}
function validateCardLength () {
    var cardNumber = document.getElementById("number");
    var length = cardNumber.value.length;
    if (length == 19 && howManyCard == 0) {
        allTrue++; 
        howManyCard++; 
    }
}
function changeName () {
    var name = document.getElementById("name");
    document.getElementsByClassName("user-name")[0].innerHTML = name.value;
}
function validateDateNotEmpty() {
    var month = document.getElementById("exp-month");
    var year = document.getElementById("exp-year");
    var dateErr = document.getElementsByClassName("error")[1];
    var mm = document.getElementsByClassName("mm")[0];
    var yy = document.getElementsByClassName("yy")[0];
    var regex ="^[0-9]*$";
    if (month.value.length == 0){
        dateErr.innerHTML = "Can't be blank";
        dateErr.classList.remove("hide");
        month.classList.add("error-state");
        
    }
    if (year.value.length == 0){
        dateErr.innerHTML = "Can't be blank";
        dateErr.classList.remove("hide");
        year.classList.add("error-state");
    }
    if (year.value.length > 0){
        dateErr.classList.add("hide");
        year.classList.remove("error-state");
        yy.innerHTML = year.value;
    }
    if (month.value.length > 0){
        dateErr.classList.add("hide");
        month.classList.remove("error-state");
        mm.innerHTML = month.value;
    }
    if (year.value.length > 0 && month.value.length > 0){
        dateErr.classList.add("hide");
        year.classList.remove("error-state");
        month.classList.remove("error-state");
        validateDate();
    } 
        
    
}
var howManyDate = 0;
function validateDate() {
    var todayYear = new Date().getFullYear();
    var month = document.getElementById("exp-month");
    var year = document.getElementById("exp-year");
    var dateErr = document.getElementsByClassName("error")[1];
    if(Number(month.value) > 12) {
        dateErr.classList.remove("hide");
        dateErr.innerHTML = "Invalid Month";
        month.classList.add("error-state");
    }
    if(Number(year.value) < Number(todayYear.toString().slice(-2))) {
        dateErr.classList.remove("hide");
        dateErr.innerHTML = "Invalid Year";
        year.classList.add("error-state");
    }
    if (Number(year.value) >= Number(todayYear.toString().slice(-2)) && Number(month.value) <= 12 && howManyDate === 0 ){
        allTrue++;
        howManyDate++;
    }
}
var howManyCVC = 0;
function validateCVCNotEmpty() {
    const cvc = document.getElementById("cvc");
    const cvcErr = document.getElementsByClassName("cvc-error")[0];
    const cvcText = document.getElementsByClassName("user-cvc")[0];
    if(cvc.value.length == 0) {
        cvcErr.classList.remove("hide");
        cvc.classList.add("error-state");
    }
    else{
        cvcText.innerHTML = cvc.value;
        cvcErr.classList.add("hide");
        cvc.classList.remove("error-state");
        if(howManyCVC == 0) {
            allTrue++;
        }
    }
}