import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATPBfknDear1EUogTqcfoPqHZld3qrZ58",
  authDomain: "actividad-10-sagp.firebaseapp.com",
  databaseURL: "https://actividad-10-sagp-default-rtdb.firebaseio.com",
  projectId: "actividad-10-sagp",
  storageBucket: "actividad-10-sagp.appspot.com",
  messagingSenderId: "569816224649",
  appId: "1:569816224649:web:8b5658779a0415c8584758",
  measurementId: "G-5Z5HBB6FTW"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
