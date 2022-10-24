// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASuWwM6vqNrL4mi5pwp4kDNFL7emRA8nE",
  authDomain: "assignment-10-client-site.firebaseapp.com",
  projectId: "assignment-10-client-site",
  storageBucket: "assignment-10-client-site.appspot.com",
  messagingSenderId: "58087160635",
  appId: "1:58087160635:web:0919835d1b5d9e921f951e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;