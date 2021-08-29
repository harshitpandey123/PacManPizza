var app_firebase = {};
(function () {
   // Initialize Firebase   
   var firebaseConfig = {
      apiKey: "AIzaSyBZNcpFBzClQecsfjE_eT7DLJAmJGEaZdE",
      authDomain: "pacman-pizza.firebaseapp.com",
      projectId: "pacman-pizza",
      storageBucket: "pacman-pizza.appspot.com",
      messagingSenderId: "962110204119",
      appId: "1:962110204119:web:e9ceb1999863c7c2716892",
      measurementId: "G-9CE8L1J4NJ"
   };
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();

   app_firebase = firebase;
})();
// const auth = firebase.auth();

// firebase.auth().onAuthStateChanged(function (user) {
//    if (user) {
//       console.log("logged in");

//    } else {
//       console.log("not logged");
//    }
// });

function accountlogin(e) {
   // e.preventDefault();
   // var userEmail = document.getElementById("email_field_login").value;
   // var userPassword = document.getElementById("password_field_login").value;

   // window.alert(userEmail + " " + userPassword);

   // const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
   // promise.catch(e => alert(e.message));
}

function logout() {
   firebase.auth().signOut();
}
