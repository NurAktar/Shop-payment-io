var _0xa0fc=["\x41\x49\x7A\x61\x53\x79\x41\x33\x67\x6B\x50\x75\x55\x6E\x51\x42\x63\x6F\x4D\x59\x6A\x4E\x61\x6C\x74\x4A\x2D\x72\x4C\x6B\x71\x65\x65\x34\x61\x50\x51\x67\x77","\x73\x68\x6F\x70\x2D\x70\x61\x79\x2D\x6D\x61\x6E\x61\x67\x65\x2E\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2E\x63\x6F\x6D","\x73\x68\x6F\x70\x2D\x70\x61\x79\x2D\x6D\x61\x6E\x61\x67\x65","\x73\x68\x6F\x70\x2D\x70\x61\x79\x2D\x6D\x61\x6E\x61\x67\x65\x2E\x61\x70\x70\x73\x70\x6F\x74\x2E\x63\x6F\x6D","\x31\x30\x36\x30\x36\x31\x36\x30\x39\x33\x34\x31\x37","\x31\x3A\x31\x30\x36\x30\x36\x31\x36\x30\x39\x33\x34\x31\x37\x3A\x77\x65\x62\x3A\x61\x61\x62\x38\x36\x32\x36\x66\x36\x30\x34\x39\x63\x34\x37\x35\x35\x36\x66\x61\x37\x38","\x47\x2D\x31\x47\x38\x43\x50\x54\x33\x58\x47\x54"];const firebaseConfig={apiKey:_0xa0fc[0],authDomain:_0xa0fc[1],projectId:_0xa0fc[2],storageBucket:_0xa0fc[3],messagingSenderId:_0xa0fc[4],appId:_0xa0fc[5],measurementId:_0xa0fc[6]}
var _0xc4ee=["\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65\x41\x70\x70"];firebase[_0xc4ee[0]](firebaseConfig)
// Initialized Firebase

var db = firebase.firestore();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    fb_user = firebase.auth().currentUser.uid;
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
  fb_user = null;
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


//testloads

function loaddata(){
  var fb_user = firebase.auth().currentUser.uid;
  console.log(fb_user);

    // Add a new document in collection "cities"
  db.collection(fb_user).doc("user101").set({
      name: "customers no.12",
      state: "canada",
      country: "USA2",
      bill: "500rs",
      phone: "9292019401"
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
}