var config = {
    apiKey: "AIzaSyCJHV-my1zHVSp1bf485-rdSxJskfAHBMA",
    authDomain: "logins-3d317.firebaseapp.com",
    databaseURL: "https://logins-3d317.firebaseio.com",
    projectId: "logins-3d317",
    storageBucket: "logins-3d317.appspot.com",
    messagingSenderId: "855532098917"
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref(); // reference ne te gjithe database
const commentsRef = rootRef.child('comments'); // krijo comments "object"
const form = document.querySelector("form"); // Form HTML

const ul = document.querySelector("ul");

function showLogin(){
    let commentsRef = firebase.database().ref("comments/");
    commentsRef.once('value',function(snapshot){
        snapshot.forEach(function(itemSnapshot){
            var itemData = itemSnapshot.val();
            var email1 = itemData.email;
            var password1 = itemData.password;
            ul.innerHTML+= "<li>"+email1+"<br>"+password1+"</li>"
        })
    })
}

showLogin()