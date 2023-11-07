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
var messagesRef = firebase.database().ref('Contact');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}
