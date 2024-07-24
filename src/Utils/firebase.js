// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZHY1s7p8WSyFssoFsaTZxHO4Ph9hY5kg",
  authDomain: "netflix-app-933f4.firebaseapp.com",
  projectId: "netflix-app-933f4",
  storageBucket: "netflix-app-933f4.appspot.com",
  messagingSenderId: "914448720124",
  appId: "1:914448720124:web:fdaa57e0b05f6b51473779",
  measurementId: "G-ECL56X8PEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);