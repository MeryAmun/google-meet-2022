import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {

}


firebase.initializeApp(firebaseConfig);

export const db = firebase;
let dbRef = firebase.database().ref();
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