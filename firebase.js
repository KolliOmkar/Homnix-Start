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

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain:
  "YOUR_PROJECT.firebaseapp.com",

  projectId:
  "YOUR_PROJECT",

  storageBucket:
  "YOUR_PROJECT.appspot.com",

  messagingSenderId:
  "YOUR_ID",

  appId:
  "YOUR_APP_ID"
};

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
