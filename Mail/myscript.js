
const allowedEmails = ['bbb@gmail.com','ddd@gmail.com', 
'ggg@gmail.com' 
];
const text = document.getElementById("text");
logIn=false;



function validation (){
const email = document.getElementById("email").value;

for (let i=0; i < allowedEmails.length; i++){

    if( email==(allowedEmails[i])){
        console.log(email)
        logIn=true;
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Welcome";
        text.style.color = "#00ff00";
    }
      
    
    else {
        logIn==false;
        form.classList.remove("invalid");
        form.classList.add("valid");
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#ff0000";
        
    }
}
}
