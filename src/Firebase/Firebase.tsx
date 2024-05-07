import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6XJ9TTMi-Q2ea3cAynGr9pG_YZQMheP4",
  authDomain: "devtraining-2ec83.firebaseapp.com",
  projectId: "devtraining-2ec83",
  storageBucket: "devtraining-2ec83.appspot.com",
  messagingSenderId: "642377465042",
  appId: "1:642377465042:web:1d406a78a39f30d5a8c10b",
  measurementId: "G-7W7TK0VXJN"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const storage=getStorage(app);

export const authentication:any  = getAuth(app);