 import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBswNTjVM33xDgC61Eb1SMXfhDrlnUF4Y4",
    authDomain: "chatapp-2743c.firebaseapp.com",
    databaseURL: "https://chatapp-2743c.firebaseio.com",
    projectId: "chatapp-2743c",
    storageBucket: "chatapp-2743c.appspot.com",
    messagingSenderId: "1065672814292"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
