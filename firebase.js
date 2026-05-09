import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
 getAuth,
 RecaptchaVerifier,
 signInWithPhoneNumber
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain:
  "YOUR_PROJECT.firebaseapp.com",

  projectId: "YOUR_PROJECT",

  storageBucket:
  "YOUR_PROJECT.appspot.com",

  messagingSenderId:
  "YOUR_ID",

  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.recaptchaVerifier =
new RecaptchaVerifier(auth,
'recaptcha-container', {});

window.sendOTP = async function(){

  const phone =
  document.getElementById("phone").value;

  const appVerifier =
  window.recaptchaVerifier;

  confirmationResult =
  await signInWithPhoneNumber(
    auth,
    phone,
    appVerifier
  );

  login.classList.add("hidden");
  otp.classList.remove("hidden");
}

window.verifyOTP = async function(){

  const code =
  document.getElementById("otpInput").value;

  await confirmationResult.confirm(code);

  otp.classList.add("hidden");
  home.classList.remove("hidden");
}
