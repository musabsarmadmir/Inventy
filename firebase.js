// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: "AIzaSyA9RS-y4DbZT4ne9XmoThxmumGIjdkT9gE",
  authDomain: "inventory-management-sys-11279.firebaseapp.com",
  projectId: "inventory-management-sys-11279",
  storageBucket: "inventory-management-sys-11279.appspot.com",
  messagingSenderId: "239682190104",
  appId: "1:239682190104:web:fe8f1cecd01b19c4b37c6d",
  measurementId: "G-F6JM8XZ7KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

// Export the initialized Firebase services
export { app, auth, firestore };
