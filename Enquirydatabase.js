//Initialize Firebase
var config = {
   apiKey:   "AIzaSyABGOh8DdeIWupgk26bq20kl6no9ouZ4vk",
   authDomain:  "firelion-c466d.firebaseapp.com",
   databaseURL: "https://firelion-c466d-default-rtdb.firebaseio.com/",
   projectId: "firelion-c466d",
   storageBucket: "firelion-c466d.appspot.com",
   messagingSenderId: "219183685725",
};

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('Enquiry');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
	
	let user = snap.val();
	
	let $li = document.createElement("li");
	$li.innerHTML = user.name;

    $li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {
    
	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('Enquiry/' + userID);
	const userDetailUI = document.getElementById("userDetail");
	
	userDetailUI.innerHTML = ""
	
	userRef.on("child_added", snap => {
		
	
	   var $p = document.createElement("p");
	   $p.innerHTML = snap.key + " - " + snap.val()
	   userDetailUI.append($p);
	
	
	});
	
}
	