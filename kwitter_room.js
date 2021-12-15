//ADD YOUR FIREBASE LINKS (chatapp ref)
const config = {
  apiKey: "AIzaSyDUrLnPfOJR6NhJQLyX-YeDttaU8uDqZyM",
  authDomain: "kwitter-6bea9.firebaseapp.com",
  databaseURL: "https://kwitter-6bea9-default-rtdb.firebaseio.com",
  projectId: "kwitter-6bea9",
  storageBucket: "kwitter-6bea9.appspot.com",
  messagingSenderId: "1018697949850",
  appId: "1:1018697949850:web:5264f2d2c48073d20c7523"
};
  // Initialize Firebase
  firebase.initializeApp(config);
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
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
      window.location = "index.html";
  }
  
  