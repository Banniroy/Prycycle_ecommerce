import axios from 'axios';

const firebaseApiStorage = axios.create({
    baseURL: "https://storage.googlepis.com/prycycle-website.appspot.com"
});

export default firebaseApiStorage;