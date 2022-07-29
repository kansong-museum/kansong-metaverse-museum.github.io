import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  addDoc,
  collection,
  updateDoc,
  query,
  where,
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

  let userArr = [];
  let o_userArr = [];

  // 데이터 불러오기
  const querySnapshot = await getDocs(collection(db, "address"));
  querySnapshot.forEach((doc) => {
    userArr.push(doc.data()["userAddress"]);
    let userArr1 = JSON.stringify(userArr);
    localStorage.setItem("arr1", userArr1);
  });

  const o_querySnapshot = await getDocs(collection(db, "o_address"));
  o_querySnapshot.forEach((doc) => {
    o_userArr.push(doc.data()["userAddress"]);
    let userArr2 = JSON.stringify(o_userArr);
    localStorage.setItem("arr2", userArr2);
  });

  const colRef = collection(db, "address");
  const userAddress = document.getElementById("userAddress").innerHTML;
  const q = await query(colRef, where("userAddress", "==", userAddress));
  const snapshot = await getDocs(q);

  snapshot.forEach((doc) => {
    let modi_name = document.getElementById("modi_name");
    modi_name.innerHTML = doc.data()["userName"];
    let modi_phoneNumber = document.getElementById("modi_phoneNumber");
    modi_phoneNumber.innerHTML = doc.data()["phoneNumber"];
    let modi_postcode = document.getElementById("modi_postcode");
    modi_postcode.innerHTML = doc.data()["postcode"];
    let modi_address = document.getElementById("modi_address");
    modi_address.innerHTML = doc.data()["address"];
    let modi_detailAddress = document.getElementById("modi_detailAddress");
    modi_detailAddress.innerHTML = doc.data()["detailAddress"];
  });

  // 데이터 보내기
  const koreaForm = document.querySelector(".koreaForm");

  koreaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const phoneNumber = formatPhoneNumber(
      document.getElementById("phoneNumber").value
    );
    const postcode = document.getElementById("postcode").value;
    const address = document.getElementById("address").value;
    const detailAddress = document.getElementById("detailAddress").value;
    const nftBalance = document.getElementById("nftBalance").innerHTML;
    const userAddress = document.getElementById("userAddress").innerHTML;
    if (userArr.find((item) => item == userAddress)) {
      alert("The address is already registered.");
    } else {
      if (
        postcode !== "" &&
        detailAddress !== "" &&
        userName !== "" &&
        phoneNumber !== "" &&
        address !== ""
      ) {
        if (document.getElementById("k_agree").value === "true") {
          try {
            let docRef = addDoc(collection(db, "address"), {
              userName: userName,
              phoneNumber: phoneNumber,
              postcode: postcode,
              address: address,
              detailAddress: detailAddress,
              nftBalance: nftBalance,
              userAddress: userAddress,
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Submitted");
            let myInfo = document.querySelector(".myInfo");
            myInfo.style.display = "none";
            let delivery = document.querySelector(".delivery");
            delivery.style.display = "none";
            let korea = document.getElementById("korea");
            korea.style.display = "none";
            $("#connectButton").hide();
            let imgFrame = document.querySelector(".imgFrame");
            imgFrame.style.display = "none";
            let youTubeFrame = document.querySelector(".youTubeFrame");
            youTubeFrame.style.display = "none";
            let tubeFrame = document.querySelector(".tubeFrame");
            tubeFrame.style.display = "block";
            let Submit_result_ko = document.querySelector(".Submit_result_ko");
            Submit_result_ko.style.display = "block";
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        } else {
          alert(
            "Please agree to the collection and use of personal information"
          );
        }
      } else {
        alert("Please enter all shipping information");
      }
    }
  });

  const overseasForm = document.querySelector(".overseasForm");

  overseasForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let select = document.getElementById("country");
    let option = select.options[select.selectedIndex];
    let country = option.text;
    const o_name = document.getElementById("o_name").value;

    const overseas_country_code = document.getElementById(
      "overseas_country_code"
    ).value;
    const overseas_tel = document.getElementById("overseas_tel").value;
    const contactNum = overseas_country_code + "-" + overseas_tel;

    const o_address = document.getElementById("o_address").value;
    const o_cityAddress = document.getElementById("o_cityAddress").value;
    const o_detailAddress = document.getElementById("o_detailAddress").value;
    const o_postcode = document.getElementById("o_postcode").value;
    const o_email = document.getElementById("o_email").value;

    const nftBalance = document.getElementById("nftBalance").innerHTML;
    const userAddress = document.getElementById("userAddress").innerHTML;
    if (o_userArr.find((item) => item == userAddress)) {
      alert("The address is already registered.");
    } else {
      if (
        country !== "" &&
        o_name !== "" &&
        overseas_tel !== "" &&
        o_address !== "" &&
        o_cityAddress !== "" &&
        o_detailAddress !== "" &&
        o_postcode !== "" &&
        o_email !== ""
      ) {
        if (isEmail(o_email)) {
          if (document.getElementById("o_agree").value === "true") {
            try {
              let docRef = addDoc(collection(db, "o_address"), {
                country: country,
                o_name: o_name,
                contactNum: contactNum,
                o_address: o_address,
                o_cityAddress: o_cityAddress,
                o_detailAddress: o_detailAddress,
                o_postcode: o_postcode,
                o_email: o_email,
                nftBalance: nftBalance,
                userAddress: userAddress,
              });
              console.log("Document written with ID: ", docRef.id);
              alert("Submitted");
              let myInfo = document.querySelector(".myInfo");
              myInfo.style.display = "none";
              let delivery = document.querySelector(".delivery");
              delivery.style.display = "none";
              let overseas = document.getElementById("overseas");
              overseas.style.display = "none";
              $("#connectButton").hide();
              let imgFrame = document.querySelector(".imgFrame");
              imgFrame.style.display = "none";
              let youTubeFrame = document.querySelector(".youTubeFrame");
              youTubeFrame.style.display = "none";
              let tubeFrame = document.querySelector(".tubeFrame");
              tubeFrame.style.display = "block";
              let Submit_result_en =
                document.querySelector(".Submit_result_en");
              Submit_result_en.style.display = "block";
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
      } else {
        alert("Please Enter Whole Address");
      }
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
