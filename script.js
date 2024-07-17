let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let loginForm = document.getElementById('loginForm');
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
    eyeL.style.cssText = `
        left: 0.6em;
        top: 0.6em;
    `;
    eyeR.style.cssText = `
        right: 0.6em;
        top: 0.6em;
    `;
};

let normalHandStyle = () => {
    handL.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        left: 7.5em;
        transform: rotate(0deg);
    `;
    handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg);
    `;
};


usernameRef.addEventListener("focus", () => {
    eyeL.style.cssText = `
        left: 0.75em;
        top: 1.12em;  
    `;
    eyeR.style.cssText = `
        right: 0.75em;
        top: 1.12em;
    `;
    normalHandStyle();
});


passwordRef.addEventListener("focus", () => {
    handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
    handR.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        right: 11.75em;
        transform: rotate(155deg);
    `;
    normalEyeStyle();
});


document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if (clickedElem !== usernameRef && clickedElem !== passwordRef) {
        normalEyeStyle();
        normalHandStyle();
    }
});

// Login validation 
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let loginUsername = usernameRef.value.trim();
    let loginPassword = passwordRef.value.trim();
    
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
    
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Signed in!');
        
    } else {
        alert('Please sign up first or check your username/password');
    }
    
    
    loginForm.reset();
});
