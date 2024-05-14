import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH9VJp1ZcFuUtPDk9eEGb6deh03c1DIVA",
  authDomain: "trisekt-deeto.firebaseapp.com",
  projectId: "trisekt-deeto",
  storageBucket: "trisekt-deeto.appspot.com",
  messagingSenderId: "1064923907552",
  appId: "1:1064923907552:web:cd3e8711baf72bf5d2d785",
  measurementId: "G-SVCSZPD490"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };