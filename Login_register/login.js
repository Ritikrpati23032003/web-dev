const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const button = document.querySelector('.btn')
const closebutton = document.querySelector('.close');
const registerForm = document.querySelector('.Register form');
const loginForm = document.querySelector('.login form');
const password=document.querySelector("#password");
const closed=document.querySelector("#closed");

registerLink.addEventListener('click', () => {
    container.classList.add('active');
    console.log("Register form opened");
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
    console.log("Login form opened");
});

button.addEventListener('click', () => {
    container.classList.add('active-popup'); // "active" class
    console.log("Login form opened"); 
});
closebutton.addEventListener('click', () => {
    container.classList.remove('active-popup'); 
    console.log("Login form opened"); 
});

let registeredEmail = ""; // Variable to store registered email

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();

    if (name === '' || email === '' || password === '') {
        registeredEmail = email; // Store the email
        localStorage.setItem("registeredEmail", email); // Store in localStorage
        document.getElementById("successRegister").innerText = "Registration successful!";
        document.getElementById("successRegister").style.display = "block";
    } else {
       alert("fill the fields");
    }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let mail = document.querySelector("#mail").value.trim(); // Ensure login uses a different input ID
    let password = document.querySelector("#password").value.trim();

    let storedEmail = localStorage.getItem("registeredEmail"); // Retrieve registered email

    if (mail === '' || password === '') {
        alert("fill the fields");
    } else if (mail !== storedEmail) {
        alert("Email does not match the registered email");
    } else {
        document.getElementById("successLogin").innerText = "Login successful!";
        document.getElementById("successLogin").style.display = "block";
    }
});


closed.addEventListener('click',()=>{
    if(password.type=="password"){
        password.type="text";

    }else{
        password.type="password";
    }
})





