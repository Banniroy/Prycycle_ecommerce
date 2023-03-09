import axios from 'axios';
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD96PRhxJmIM3LDI0EQuaqKw9tirBT7STo",
  authDomain: "prycycle-website.firebaseapp.com",
  projectId: "prycycle-website",
  storageBucket: "prycycle-website.appspot.com",
  messagingSenderId: "851668516273",
  appId: "1:851668516273:web:754ced65fde68db8465190",
  measurementId: "G-27VC6YXK6M"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app)

export default storage;