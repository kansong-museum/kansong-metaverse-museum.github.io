// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7SXftHbWlIkzC0nYs317DojuoKMtoOhY",
  authDomain: "kansong-metaverse-museum.firebaseapp.com",
  projectId: "kansong-metaverse-museum",
  storageBucket: "kansong-metaverse-museum.appspot.com",
  messagingSenderId: "516424245894",
  appId: "1:516424245894:web:f4609b8b4917014679e707",
  measurementId: "G-ELGZEVNNQY",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
console.log(db);

const querySnapshot = await getDocs(collection(db, "address"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()["wallet_address"]}`);
});

function submit() {
  // const name = document.getElementById('name').value;
  console.log(ethBalance);
}
// try {
//     const docRef = await addDoc(collection(db, "address"), {
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//     console.error("Error adding document: ", e);
//     }

// const docR = doc(db, "address", "gmwhFyBo68A7czbd0FpW");
// updateDoc(docR, {born: 1999})
