
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCwwYMxI_zoQ0GoLvk22eNxtE7vFCdao8s",
      authDomain: "kwitter-d12b0.firebaseapp.com",
      databaseURL: "https://kwitter-d12b0-default-rtdb.firebaseio.com",
      projectId: "kwitter-d12b0",
      storageBucket: "kwitter-d12b0.appspot.com",
      messagingSenderId: "54835289507",
      appId: "1:54835289507:web:9ecfede5f748e5a05fce16"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       roomnames = childKey;
      //Start code
      console.log("Room name = " + roomnames);
      row="<div class='roomname' id="+roomnames+"onclick='redirectToRoomName(this.id' >#"+ roomnames+ "<div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  roomname=document.getElementById("roomname").value;

  firebase.database().ref("/").child(roomname).update({
    purpose : "addingroomname"
  });

  localStorage.setItem(roomname, "roomname");

  window.location = "kwitter_page.html";
}

function  redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location ="kwitter_page.html";
}
