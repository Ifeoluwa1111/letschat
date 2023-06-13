


const firebaseConfig = {
  apiKey: "AIzaSyC1zLqCKzmY1lpp5Xv8bK9meUdAEM77_78",
  authDomain: "class-test-92458.firebaseapp.com",
  databaseURL: "https://class-test-92458-default-rtdb.firebaseio.com",
  projectId: "class-test-92458",
  storageBucket: "class-test-92458.appspot.com",
  messagingSenderId: "930380847563",
  appId: "1:930380847563:web:41ca853ebddb2759f47e4e",
  measurementId: "G-Q3N28632NP"
};


firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;

  console.log("Room Name -" + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' ># "+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;

 });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "Letschat_page.html";
}

function redirctToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name)
        window.location = "Letschat_page.html";
}    
