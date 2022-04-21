import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDydkkMZiAvc-eJvet9oeenEXXpIdviayc",
  authDomain: "dumpierres-54c84.firebaseapp.com",
  projectId: "dumpierres-54c84",
  storageBucket: "dumpierres-54c84.appspot.com",
  messagingSenderId: "1033384146860",
  appId: "1:1033384146860:web:ad4c8e11f5258122a1ec09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
  return app;
};
