import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-RlqBaWjazZay8VttuCmm6yPGaJ0lbgE",
    authDomain: "crowhack-project.firebaseapp.com",
    projectId: "crowhack-project",
    storageBucket: "crowhack-project.appspot.com",
    messagingSenderId: "146148992616",
    appId: "1:146148992616:web:6265300b00cebd68dabddd"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

const fireDB = getFirestore(app);  

export default fireDB;