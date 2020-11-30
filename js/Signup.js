var firebaseConfig = {
  apiKey: "AIzaSyDjdVP2wSWz91dPgET3KIf4XbdxPB_2l1w",
  authDomain: "javascriptdemo-237db.firebaseapp.com",
  databaseURL: "https://javascriptdemo-237db.firebaseio.com",
  projectId: "javascriptdemo-237db",
  storageBucket: "javascriptdemo-237db.appspot.com",
  messagingSenderId: "397768045903",
  appId: "1:397768045903:web:64fc692aef3653b407013a",
  measurementId: "G-9W77ZD235X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  //change the following code
    var email = document.getElementById("userIn");
    console.log("email");
    var password = document.getElementById("passIn");
    console.log("password");

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in
    
      
      console.log("You are signed up");
      let user = firebase.auth().currentUser;

      user.updateProfile({ displayName: "Brendon Esposito" });
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
      console.log("error");
    });
});