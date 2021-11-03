const firebaseConfig = {
apiKey: "AIzaSyA3gkPuUnQBcoMYjNaltJ-rLkqee4aPQgw",
authDomain: "shop-pay-manage.firebaseapp.com",
projectId: "shop-pay-manage",
storageBucket: "shop-pay-manage.appspot.com",
messagingSenderId: "1060616093417",
appId: "1:1060616093417:web:aab8626f6049c47556fa78",
measurementId: "G-1G8CPT3XGT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    // alert("LoggedIn");
    document.querySelector('.wrapper').style.display="none";
    document.querySelector('.main-container').style.display="block";
  } else {
    // User is signed out
    // alert("not logged In");
    document.querySelector('.wrapper').style.display="flex";
    document.querySelector('.main-container').style.display="none";
  }
});

function login(){
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      document.getElementById('msgid').innerText="Incorrect UserID or Password.";
      document.getElementById('msgid').style.opacity='1';
      setTimeout(function () {
        document.getElementById('msgid').style.opacity='0';
      }, 5000);
    });

}
function logout(){
  firebase.auth().signOut().then(() => {
  // Sign-out successful.

  }).catch((error) => {
    // An error happened.
  });
}
function reset(){
  var email = document.querySelector("#email").value;
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    document.getElementById('msgid').innerText="Password reset email sent!.";
    document.getElementById('msgid').style.opacity='1';
    document.getElementById('msgid').style.color='green';
    setTimeout(function () {
      document.getElementById('msgid').style.opacity='0';
      document.getElementById('msgid').style.color='red';
    }, 5000);
  })
  .catch((error) => {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    document.getElementById('msgid').innerText="Invalid UserID.";
    document.getElementById('msgid').style.opacity='1';
    setTimeout(function () {
      document.getElementById('msgid').style.opacity='0';
    }, 5000);
  });
}