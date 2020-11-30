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

$("#Login").submit(function(e) {
  e.preventDefault();

  // get the username(email) and password from the form
  var email = "brendone@usca.edu";
  var password = "dsdsds";

  // sign in
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      console.log("Login in successfully");

      //optional
      let user = firebase.auth().currentUser;
      console.log(
        user.displayName + " " + user.email + " " + user.emailVerified
      );
    })
    .catch(error => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});