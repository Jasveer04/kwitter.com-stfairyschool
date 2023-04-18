var firebaseConfig = {
      apiKey: "AIzaSyDJqYK-mLwLlRsYn9L7BoikX9BchOpfjAQ",
      authDomain: "useless-kwitter.firebaseapp.com",
      databaseURL: "https://useless-kwitter-default-rtdb.firebaseio.com",
      projectId: "useless-kwitter",
      storageBucket: "useless-kwitter.appspot.com",
      messagingSenderId: "434803273306",
      appId: "1:434803273306:web:95414ef91ea424f2ecb263"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div></hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter.html"
}