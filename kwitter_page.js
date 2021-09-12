//YOUR FIREBASE LINKS

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


    username = localStorage.getItem("username");
    roomname = localStorage.getItem("roomname");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name:username,
                message:msg,
                likes:0000000
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
likes = message_data['likes'];
name_with_tag = "</h4> " + name + "<img class='user_tick' src='tick.png'></h4> "
message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
likebtn = "<button class='btn btn-warning' id="+ firebase_message_id + "value "+ likes+ "onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likes + "</span><button><hr>";
row = name_with_tag + message_with_tag + likebtn + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logout() {

      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";

}

function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id= message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(roomname).child(message_id).update({
            like: updated_likes
      });
}