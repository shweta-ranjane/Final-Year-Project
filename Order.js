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
var messagesRef = firebase.database().ref('Order');

// Listen for form submit
document.getElementById('orderForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var address = getInputVal('address');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var prname = getInputVal('prname');

  // Save message
  saveMessage(name, address, email, phone, prname);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('orderForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, address, email, phone, prname){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    address:address,
    email:email,
    phone:phone,
    prname:prname
  });
}
