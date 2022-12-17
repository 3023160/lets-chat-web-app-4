//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBBGuZTPmOoUAk2gh0mRT61Ts2txgqa-DQ",
      authDomain: "kwit-6f69a.firebaseapp.com",
      databaseURL: "https://kwit-6f69a-default-rtdb.firebaseio.com",
      projectId: "kwit-6f69a",
      storageBucket: "kwit-6f69a.appspot.com",
      messagingSenderId: "120809139750",
      appId: "1:120809139750:web:f852dd9803f8a48d1e00e7",
      measurementId: "G-2ZGY8T4SX0"
    };
    
    // Initialize Firebas
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

 function send()
 {
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
 }

 function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}
