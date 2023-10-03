const firebaseConfig = {
    apiKey: "AIzaSyCfO2VwAFq6BmUD-yI2LwiRRo7ozQ2TcNQ",
    authDomain: "minor-d3fab.firebaseapp.com",
    databaseURL: "https://minor-d3fab-default-rtdb.firebaseio.com",
    projectId: "minor-d3fab",
    storageBucket: "minor-d3fab.appspot.com",
    messagingSenderId: "200451627384",
    appId: "1:200451627384:web:4f7d45c1258668abc6508d"
  };
  firebase.initializeApp(firebaseConfig);
  var messagesRef=firebase.database().ref('email');
  document.getElementById('form').addEventListener('submit',submitForm);
  function submitForm(e)
  {
    e.preventDefault();
    var email=getInputVal('email');
    var password=getInputVal('password');
    saveMessage(email,password);
    document.querySelector('.alert').style.display='block';
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000);
    document.getElementById('form').reset()
  }
  function getInputVal(id)
  {
    return document.getElementById(id).Value;
  }
  function saveMessage(email)
  {
    var newMessageRef = messagesRef.push();

    newMessageRef.set({
       
        email:email
        
     
      });
      console.log(email);
  }