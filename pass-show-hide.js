const pswrdField = document.querySelector(".login-form input[type='password']"),
toggleIcon = document.querySelector(".login-form .field i");

toggleIcon.onclick = () =>{
  if(pswrdField.type === "password"){
    pswrdField.type = "text";
    toggleIcon.classList.add("active");
  }else{
    pswrdField.type = "password";
    toggleIcon.classList.remove("active");
  }
}
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWh6Z13EeGCb024ngGQ5bxNNmWkY5lMD0",
  authDomain: "muj-minor-portal.firebaseapp.com",
  projectId: "muj-minor-portal",
  storageBucket: "muj-minor-portal.appspot.com",
  messagingSenderId: "888074499447",
  appId: "1:888074499447:web:08a2dfa0e328c56ee35d72"
});
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();
   const signUp= ()=>
   {
    const registation_no=document.getElementsByName("registation_no").value
    const password=document.getElementsByName("password").value
    console.log(registation_no,password )
    firebase.auth().createUserWithEmailAndPassword(registation_no, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
   }
