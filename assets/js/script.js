let clock = document.querySelector(".timeNow");

// set inverval take two argument function and time
setInterval(function(){
  clock.innerHTML = new Date().toLocaleTimeString();
}, 1000)


// calculate user age function
function calculateUserAge(dateOfBirth){
  let today = new Date();
  let birthDate = new Date(dateOfBirth);
  let userAge = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();

  if( months < 0 || ( months === 0 && today.getDate() < birthDate.getDate() )){
    userAge--;
  }

  return userAge;
}

let form = document.querySelector("form");
let currentDate = document.getElementById('currentDate').value = new Date().toISOString().split('T')[0];


document.querySelector("#dateOfBirth").addEventListener("change", function(){
  let input = this.value;
});

form.addEventListener("submit", (e)=> {
  e.preventDefault();

  let dateOfBirth = document.querySelector("#dateOfBirth").value;
  let result = document.querySelector("#results");
  let alertError = document.querySelector(".alert");

  console.log(dateOfBirth);

  if(dateOfBirth.trim() === ""){
    alertError.style.display = "block";
    alertError.innerHTML = "Please enter valid <strong>Date Of Birth</strong>";
    return;
  }else {
    alertError.style.display = "none";
    let age = calculateUserAge(dateOfBirth);
    result.innerHTML = `<span>Your Age: ${age}</span>`;
  }

})

