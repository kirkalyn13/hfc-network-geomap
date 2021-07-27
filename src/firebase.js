import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBOt7jEtgGkTybdRo8D3X7bTnF-wN0SMGQ",
  authDomain: "site-geomap.firebaseapp.com",
  databaseURL: "https://site-geomap-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "site-geomap",
  storageBucket: "site-geomap.appspot.com",
  messagingSenderId: "106611724911",
  appId: "1:106611724911:web:ee3ceb270a647cbc42f39a"
};
// Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()