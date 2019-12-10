class UI {
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#signInForm');
        container.insertBefore(div, form);

        setTimeout(() => 
            document.querySelector('.alert')
            .remove(), 3000);
    }
}

// Variable to count number of login attempts
var attempt = 3; 

// Login button 
// function validateAndSignIn() {
//     var username = document.querySelector('#username').value;
//     var password = document.querySelector('#password').value;

//     if(username === "admin" && password === "password") {
//         alert("Login Successful");

//         //UI.showAlert('Login Successful', 'success');
//         document.querySelector('#username').value = '';
//         window.location = "dashboard.html";
//         return false;
//     } else {
//         attempt --;
//         alert("You have " + attempt + " attempts left");

//         if(attempt === 0) {
//             document.querySelector("#username").disabled = true;
//             document.querySelector("#password").disabled = true;
//             document.querySelector("#submit").disabled = true;
//             return false;
//         }
//     }
// }
var username = document.getElementById('username');

var password = document.getElementById('password');
var submit = document.getElementById('submit');

submit.addEventListener('click', function(e) {
    //console.log(username.value + password.value)
    var usernameData = username.value;
    var passwordData = password.value;
    console.log(usernameData + ' ' + passwordData)
})