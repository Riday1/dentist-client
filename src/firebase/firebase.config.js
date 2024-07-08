// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtg-0jJEH16OB8ANvK-wg3xnmZyxM5m_w",
    authDomain: "dentist-portal-client.firebaseapp.com",
    projectId: "dentist-portal-client",
    storageBucket: "dentist-portal-client.appspot.com",
    messagingSenderId: "1019292020466",
    appId: "1:1019292020466:web:ebdc3d97b58ff256876a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;