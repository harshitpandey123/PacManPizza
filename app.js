const login = document.querySelector('.login');
const overview = document.querySelector('.overview-form');
const closeBtn = document.querySelector('.close');
const loginForm = document.querySelector('.login-form');
const signin = document.querySelector('.signin');
const signinForm = document.querySelector('.signin-form');
const locationBtn = document.querySelector('.location');
const body = document.querySelector('.main');

login.addEventListener('click', (e) => {
   e.preventDefault();
   overview.style.width = "30rem";
   loginForm.style.display = "block";
   overview.style.borderLeft = "#cc4726 4px solid";
});

signin.addEventListener('click', (e) => {
   e.preventDefault();
   overview.style.width = "30rem";
   signinForm.style.display = "block";
   overview.style.borderLeft = "#cc4726 5px solid";
})

closeBtn.addEventListener('click', () => {
   overview.style.width = "0";
   signinForm.style.display = "none";
   loginForm.style.display = "none";
   document.body.style.backgroundColor = "";
   overview.style.borderLeft = "#cc4726 0px solid";
})

function getLocation() {

   if (window.navigator.geolocation) {
      window.navigator.geolocation
         .getCurrentPosition(console.log, console.log);
   }
}

locationBtn.addEventListener('click', (e) => {
   e.preventDefault();
   console.log("afdasf");
   getLocation();
})



