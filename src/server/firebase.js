import firebase from 'firebase/app';
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyAWUSlzuBPLm7NZ1D2xp6mOqxb9wW9-S5E",
  authDomain: "meet-clone-5c6b0.firebaseapp.com",
  databaseURL: "https://meet-clone-5c6b0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "meet-clone-5c6b0",
  storageBucket: "meet-clone-5c6b0.appspot.com",
  messagingSenderId: "148405291780",
  appId: "1:148405291780:web:1715014148b715272b1e51",
  measurementId: "G-S417NSQZVR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



 export const db = firebase
let dbRef = firebase.database().ref();
export let connectedRef = firebase.database().ref(".info/connected")
export const userName = prompt("What is your name")
const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get('id');

if(roomId){
    dbRef = dbRef.child(roomId)
}else{
    dbRef = dbRef.push()
    window.history.replaceState(null, "Meet", "?id=" + dbRef.key)
}

export default dbRef