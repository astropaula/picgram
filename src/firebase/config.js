import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAT9kbygZME7mtXi_kXCE0EdwHjbzd-a6w",
    authDomain: "paula-picgram.firebaseapp.com",
    databaseURL: "https://paula-picgram.firebaseio.com",
    projectId: "paula-picgram",
    storageBucket: "paula-picgram.appspot.com",
    messagingSenderId: "692695587351",
    appId: "1:692695587351:web:83698f117df2dfc8485a52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialize storage servis upload time to sort images
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp; //Special type of data: timestamp used by firebase.

export { projectStorage, projectFirestore, timestamp };