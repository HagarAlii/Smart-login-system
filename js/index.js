var allInputs = document.querySelectorAll("input");
var upBtn = document.querySelectorAll(".signup");
var inBtn = document.querySelectorAll(".signin");
var confused = document.querySelector(".v-holder video");
var moveUP = document.querySelector(".head");
var UPdata = document.querySelector(".up-sec");
var INdata = document.querySelector(".in-sec");
var info = document.querySelector(".info h5");
var infoLogin = document.querySelector(".infoLogin h5");
var submit = document.querySelector(".submit");


// login inputs
var loginMail = document.querySelector(".login-mail");
var loginPass = document.querySelector(".login-pass");
var login = document.querySelector(".loginBtn");


// inputs of page sign up
var nameInput = document.getElementById("urName");
var mailInput = document.getElementById("mail");
var passInput = document.getElementById("pass");

var userData ;
if(localStorage.getItem("allData")==null){
  userData =[];
}
else{
  userData = JSON.parse( localStorage.getItem("allData"))
}


login.addEventListener("click",function(){
for(var i=0 ; i<userData.length ; i++){
  if(userData[i].userMail=== loginMail.value && userData[i].userPass=== loginPass.value )
    { 
      localStorage.setItem("loggedInUser", userData[i].userName);
      
      infoLogin.innerHTML = "User login successfully!";
      infoLogin.style.cssText = `
          font-size: 18px;
          text-shadow: 1px 2px 5px green;
          color: green !important;
          margin-top: 20px;
        `;
        console.log(userData);
        clearData ();
        document.location.href = "html/login.html";
    }
    else {
      
      infoLogin.innerHTML = "User doesn't exist";
          infoLogin.style.cssText = `
            font-size: 18px;
            text-shadow: 1px 2px 5px darkred;
            color: darkred !important;
            margin-top: 20px;
          `;
          console.log(userData);
          
    }
}
})




submit.addEventListener("click" , collectData)

function signUPin(videoSrc, hideSection, showSection) {
  confused.setAttribute("src", videoSrc);
  confused.removeAttribute("loop");
  moveUP.style.cssText = `
    top: 20% !important;
    transition: all 1s;
  `;
  hideSection.style.cssText = `opacity: 0 !important;`;
  showSection.style.cssText = `
    top: 60% !important;
    transition: all 1s;
    opacity: 1 !important;
  `;
}
for(var i=0 ; i < inBtn.length ; i++){
  upBtn[i].addEventListener("click", () => signUPin("imgs/up.mp4", INdata, UPdata));
  inBtn[i].addEventListener("click", () => signUPin("imgs/in.mp4", UPdata, INdata));
  
}


// to validate user's data
var regex ={
  urName : /^\w{3,}$/ ,
  mail :/^[a-zA-Z]\w{1,}@gmail.com$/,
  pass :/\w{4,}/
}
function validInputs (element){
 
  if(regex[element.id].test(element.value) == true){
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
  }
  else{
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
  }
}



// to save data from user
function collectData() {

  var person = {
    userName: nameInput.value,
    userMail: mailInput.value,
    userPass: passInput.value
  };

  if(regex.urName.test(person.userName) && regex.mail.test(person.userMail) && regex.pass.test(person.userPass)){
    var userExists =false ;
     for(var i =0 ; i < userData.length ; i++){
      if(userData[i].userMail === person.userMail){
        userExists= true ;
        break; 
    }
  }
  if(userExists){
    info.innerHTML = "User already exists";
      info.style.cssText = `
        font-size: 18px;
        text-shadow: 1px 2px 5px darkred;
        color: darkred !important;
        margin-top: 20px;
      `;
      console.log(userData);
  }
  else
  {
    userData.push(person);
    localStorage.setItem("allData", JSON.stringify(userData));

    console.log("Registering user:", person.userName);
     localStorage.setItem("loggedInUser", person.userName);
    console.log("LoggedInUser from localStorage:", localStorage.getItem("loggedInUser"));

    info.innerHTML = "User registered successfully!";
    info.style.cssText = `
      font-size: 18px;
      text-shadow: 1px 2px 5px green;
      color: green !important;
      margin-top: 20px;
    `;
    
    console.log(userData);
    clearData ();
      
  } 
}
 else {
  // If validation fails
  info.innerHTML = "Invalid input data!";
  info.style.cssText = `
    font-size: 18px;
    text-shadow: 1px 2px 5px darkred;
    color: darkred !important;
    margin-top: 20px;
  `;
    console.log(userData);
    clearData ();
}
}


// to clear inputs after submit
function clearData (){
 for(var i =0 ; i < allInputs.length ; i++){
  allInputs[i].classList.remove("is-valid");
  allInputs[i].classList.remove("is-invalid");
  allInputs[i].value=null;
 }
}

