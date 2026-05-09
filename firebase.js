import { initializeApp }
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBfcWoaN--WnFtPaLhdDHe1Swb5rtx1X-c",
    authDomain: "homnix-start.firebaseapp.com",
    projectId: "homnix-start",
    storageBucket: "homnix-start.firebasestorage.app",
    messagingSenderId: "600541595723",
    appId: "1:600541595723:web:a7558ad6ca2cc7c059a5ce",
    measurementId: "G-XN6SQ5GPM5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

window.recaptchaVerifier =
new RecaptchaVerifier(
  auth,
  "recaptcha-container",
  {}
);

window.sendOTP =
async function(){

  let phone =
  document.getElementById(
    "phone"
  ).value;

  phone =
  phone.replace(/\D/g,'');

  if(phone.length !== 10){

    alert(
      "Enter valid 10 digit number"
    );

    return;
  }

  const fullPhone =
  "+91" + phone;

  const appVerifier =
  window.recaptchaVerifier;

  try{

    confirmationResult =
    await signInWithPhoneNumber(
      auth,
      fullPhone,
      appVerifier
    );

    login.classList.add(
      "hidden"
    );

    otp.classList.remove(
      "hidden"
    );

    alert("OTP Sent");

  }catch(error){

    alert(error.message);
  }
}

window.verifyOTP =
async function(){

  const code =
  document.getElementById(
    "otpInput"
  ).value;

  try{

    await confirmationResult.confirm(
      code
    );

    otp.classList.add(
      "hidden"
    );

    home.classList.remove(
      "hidden"
    );

  }catch(error){

    alert(
      "Invalid OTP"
    );
  }
}
