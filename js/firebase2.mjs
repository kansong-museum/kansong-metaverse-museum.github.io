import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

export async function fire() {
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

  let surveyArr = [];

  const querySnapshot = await getDocs(collection(db, "survey"));
  querySnapshot.forEach((doc) => {
    surveyArr.push(doc.data()["userAddress"]);
    let surveyArr1 = JSON.stringify(surveyArr);
    localStorage.setItem("arr", surveyArr1);
  });

  const surveyForm = document.querySelector(".surveyForm");

  surveyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    var YesOrNo = $('input[name="delivery"]:checked').val();
    const amount_needs = document.getElementById("amount_needs").value;
    const phoneNumber = formatPhoneNumber(
      document.getElementById("phoneNumber").value
    );
    const email = document.getElementById("email").value;
    const nftBalance = document.getElementById("nftBalance").innerHTML;
    const userAddress = document.getElementById("userAddress").innerHTML;

    if (phoneNumber !== "" && email !== "") {
      if (surveyArr.find((item) => item == userAddress)) {
        alert("The address is already registered.");
      } else {
        if (isEmail(email)) {
          if (document.getElementById("k_agree").value === "true") {
            try {
              let docRef = addDoc(collection(db, "survey"), {
                YesOrNo: YesOrNo,
                amount_needs: amount_needs,
                phoneNumber: phoneNumber,
                email: email,
                nftBalance: nftBalance,
                userAddress: userAddress,
              });
              console.log("Document written with ID: ", docRef.id);
              let myInfo = document.querySelector(".myInfo");
              myInfo.style.display = "none";
              let korea = document.getElementById("korea");
              korea.style.display = "none";
              $("#connectButton").hide();
              let imgFrame = document.querySelector(".imgFrame");
              imgFrame.style.display = "none";
              let youTubeFrame = document.querySelector(".youTubeFrame");
              youTubeFrame.style.display = "none";
              let Submit_result_ko =
                document.querySelector(".Submit_result_ko");
              Submit_result_ko.style.display = "block";
              let explain = document.getElementById("explain");
              explain.style.display = "none";
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          } else {
            alert(
              "Please agree to the collection and use of personal information"
            );
          }
        } else {
          alert("Please enter the correct email format");
        }
      }
    } else {
      alert("Please enter all information");
    }
  });

  const formatPhoneNumber = (input) => {
    const cleanInput = input.replaceAll(/[^0-9]/g, "");
    let result = "";
    const length = cleanInput.length;
    if (length === 8) {
      result = cleanInput.replace(/(\d{4})(\d{4})/, "$1-$2");
    } else if (cleanInput.startsWith("02") && (length === 9 || length === 10)) {
      result = cleanInput.replace(/(\d{2})(\d{3,4})(\d{4})/, "$1-$2-$3");
    } else if (
      !cleanInput.startsWith("02") &&
      (length === 10 || length === 11)
    ) {
      result = cleanInput.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
    } else {
      result = undefined;
    }
    return result;
  };

  function isEmail(asValue) {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }
}
