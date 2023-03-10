import axios from 'axios';
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDQ01JsSP-H9LAeDx_xZXKCu6oZoWhyt0",
  authDomain: "bicycle-website-3a0d9.firebaseapp.com",
  projectId: "bicycle-website-3a0d9",
  storageBucket: "bicycle-website-3a0d9.appspot.com",
  messagingSenderId: "42393516978",
  appId: "1:42393516978:web:f178a71389b86ac88342ab"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app)

export default storage;
