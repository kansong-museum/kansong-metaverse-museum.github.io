import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

// 데이터 불러오기
const querySnapshot = await getDocs(collection(db, "address"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()["userAddress"]}`);
});

// 데이터 보내기
const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  const postcode = document.getElementById("postcode").value;
  const address = document.getElementById("address").value;
  const detailAddress = document.getElementById("detailAddress").value;
  const extraAddress = document.getElementById("extraAddress").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const ethBalance = document.getElementById("ethBalance").innerHTML;
  const userAddress = document.getElementById("userAddress").innerHTML;

  if (postcode !== "" && detailAddress !== "" && extraAddress !== "") {
    try {
      const docRef = addDoc(collection(db, "address"), {
        postcode: postcode,
        address: address,
        detailAddress: detailAddress,
        extraAddress: extraAddress,
        ethBalance: ethBalance,
        userAddress: userAddress,
        phoneNumber: phoneNumber,
      });
      alert("submitted🙂");
      // console.log("Document written with ID: ", docRef.id);
      let modal = document.getElementById("walletModal");
      modal.style.display = "none";
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    alert("please enter your address");
  }
});

// const docR = doc(db, "address", "gmwhFyBo68A7czbd0FpW");
// updateDoc(docR, {born: 1999})

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  let modal = document.getElementById("walletModal");
  modal.style.display = "none";
});
