import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLn7laFD2mUEuQ5wtVOqo5eSrwv6MnBmU",
  authDomain: "clone-f3b95.firebaseapp.com",
  projectId: "clone-f3b95",
  storageBucket: "clone-f3b95.appspot.com",
  messagingSenderId: "245819325760",
  appId: "1:245819325760:web:c026c7c3a58cb3c2618ea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
