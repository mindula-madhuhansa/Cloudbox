import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "cloudbox-f3f43.firebaseapp.com",
  projectId: "cloudbox-f3f43",
  storageBucket: "cloudbox-f3f43.appspot.com",
  messagingSenderId: "761165967827",
  appId: "1:761165967827:web:31b7d90151131f8af37f26"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage}