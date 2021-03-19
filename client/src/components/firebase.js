import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBT4D-MiuXFsA5oiZcpfyHxJxj4at32fNk",
    authDomain: "cookbook-bca21.firebaseapp.com",
    projectId: "cookbook-bca21",
    storageBucket: "cookbook-bca21.appspot.com",
    messagingSenderId: "588796326510",
    appId: "1:588796326510:web:346e6d25d9f6d7e5b4ac7f",
    measurementId: "G-8QT85EVQ5D"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };