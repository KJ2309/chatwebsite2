
const firebaseConfig = {
    apiKey: "AIzaSyArdZFSOyYnGHGAWxkRxZIqXQBgWcArIx4",
    authDomain: "chat-website-da68d.firebaseapp.com",
    databaseURL: "https://chat-website-da68d-default-rtdb.firebaseio.com",
    projectId: "chat-website-da68d",
    storageBucket: "chat-website-da68d.appspot.com",
    messagingSenderId: "391037116454",
    appId: "1:391037116454:web:0e47c5f9c241d935fbc6e7"
  };
firebase.initializeApp(firebaseConfig) 

function createRoom(){
    roomName = document.getElementById("roomid").value;
    firebase.database().ref("/").child(roomName).update({
      text:"Adding room name"})
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("rooms-container").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room-name' id="+Room_names+">"+ Room_names +"<button  onclick='redirectToRoomName(this.id)'>Join</button><br></div> ";
 document.getElementById("rooms-container").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(Room_name)
{
console.log(Room_name);
localStorage.setItem("room_name", Room_name);
window.location = "chatRoomTemp.html";
}
