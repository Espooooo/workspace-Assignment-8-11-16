// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type='submit')").click(function(e) {
  e.preventDefault();

});
firebase
  .firestore()
  .collection("hotelSurvey")


// update the result in table
