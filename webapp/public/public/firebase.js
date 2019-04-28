 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBy30ArTwFSzTV6zUfBaiI9JJWMqOM2g_c",
    authDomain: "databaseicp.firebaseapp.com",
    databaseURL: "https://databaseicp.firebaseio.com",
    projectId: "databaseicp",
    storageBucket: "databaseicp.appspot.com",
    messagingSenderId: "472388846294"
  };
  firebase.initializeApp(config);

  registerUSer=()=>{
  	user_email = document.getElementByID("email").value
  	user_psword = document.getElementByID("psword").value
  	firebase.auth().createUserWithEmailAndPassword(user_email,user_psword).then(function(resp){
  		console.log(resp)
  		alert("User Created Successfully")
  	}).catch(function(err){
  		console.log(err)
  		console.log(err.message)
  	})
  
  }
