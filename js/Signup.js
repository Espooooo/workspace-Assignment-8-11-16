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

//initialize
firebase.initializeApp(firebaseConfig);

//Start
console.log("start...");

$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("click the submit");

  // use the provided sign in 
  //hwk is to read the data from the form
  var email = "yilianz@gmail.com";
  var psw = "aiken";
  firebase.auth().createUserWithEmailAndPassword(email,psw).then(user =>{
       console.log("success");
  }).catch(error=>{
       console.log(error.code); 
       console.log(error.message);
  });



});