import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { getFirestore, addDoc, collection, serverTimestamp, onSnapshot, orderBy, query, limit } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeUjeM-TUU7dgcpe76srcuAPk3oyJTXz0",
  authDomain: "galileology.firebaseapp.com",
  projectId: "galileology",
  storageBucket: "galileology.appspot.com",
  messagingSenderId: "1088759278734",
  appId: "1:1088759278734:web:039a611cbb6fc851b4addf"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export {storage, db, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject , addDoc, collection, limit, serverTimestamp, onSnapshot, orderBy, query}

