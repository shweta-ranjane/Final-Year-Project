// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey:   "AIzaSyABGOh8DdeIWupgk26bq20kl6no9ouZ4vk",
  authDomain:  "firelion-c466d.firebaseapp.com",
  databaseURL: "https://firelion-c466d-default-rtdb.firebaseio.com/",
  projectId: "firelion-c466d",
  storageBucket: "firelion-c466d.appspot.com",
  messagingSenderId: "219183685725",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Enquiry');

// Listen for form submit
document.getElementById('enquiryForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var city = getInputVal('city');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, city, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('enquiryForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, city, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
	city: city,
    phone: phone,
    message: message
  });
}
