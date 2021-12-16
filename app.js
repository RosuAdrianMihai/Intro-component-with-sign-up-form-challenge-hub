const buton = document.querySelector("#submit");
const firstName = document.getElementById("input1");
const LastName = document.getElementById("input2");
const EmailAdress = document.getElementById("input3");
const password = document.getElementById("input4");
const text = document.getElementsByClassName("hide");
const exclamation = document.getElementsByClassName("exclamation");
const form = document.getElementById("form");

let validation = 0; 

 buton.addEventListener("click",()=>{
     validation = 0;
     checkFirstName(firstName.value);
     checkLastName(LastName.value);
     checkEmail(EmailAdress.value);
     checkPassword(password.value);
     form.addEventListener("submit",(e)=>{
         if(validation != 4){
         e.preventDefault()
         } else SubmitEvent;
     })
 });
  
 function checkFirstName(input1){
   if(input1 === ""){
       firstName.classList.add("visible");
       text[0].classList.add("visible");
       exclamation[0].classList.add("visible");
      
   }else {validation += 1;
    firstName.classList.remove("visible");
    text[0].classList.remove("visible");
    exclamation[0].classList.remove("visible");
   }
}

 function checkLastName(input2){
    if(input2 === ""){
        LastName.classList.add("visible");
        text[1].classList.add("visible");
        exclamation[1].classList.add("visible");
        
 }else {validation += 1;
    LastName.classList.remove("visible");
    text[1].classList.remove("visible");
    exclamation[1].classList.remove("visible");
   }
}

function checkEmail(input3){
    let validateEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(input3 === "" || input3.match(validateEmail)==null){
        EmailAdress.classList.add("visible");
        text[2].classList.add("visible");
        exclamation[2].classList.add("visible");
       
    }else {validation += 1;
        EmailAdress.classList.remove("visible");
        text[2].classList.remove("visible");
        exclamation[2].classList.remove("visible");
       }
}

function checkPassword(input4){
    if(input4 === ""){
        password.classList.add("visible");
        text[3].classList.add("visible");
        exclamation[3].classList.add("visible");
        
    }else {validation += 1;
        password.classList.remove("visible");
        text[3].classList.remove("visible");
        exclamation[3].classList.remove("visible");
       }
}

