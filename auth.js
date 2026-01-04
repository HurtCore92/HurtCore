// 🔹 Importar Firebase desde CDN (ESTO ES CLAVE)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔹 Configuración REAL de HurtCore (la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyCuVqt8HcseOGGxHUjuq3gZVg4UfozLnow",
  authDomain: "hurtcore-e3a43.firebaseapp.com",
  projectId: "hurtcore-e3a43",
  storageBucket: "hurtcore-e3a43.appspot.com",
  messagingSenderId: "753835000234",
  appId: "1:753835000234:web:f119d43af0a8017d632bd3"
};

// 🔹 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 ELEMENTOS HTML
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const googleBtn = document.getElementById("googleBtn");

// 🔹 LOGIN EMAIL
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        alert("Login exitoso 🖤");
        window.location.href = "panel.html";
      })
      .catch(err => alert(err.message));
  });
}

// 🔹 REGISTRO EMAIL
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        alert("Usuario creado 🖤");
        window.location.href = "panel.html";
      })
      .catch(err => alert(err.message));
  });
}

// 🔹 LOGIN GOOGLE
if (googleBtn) {
  const provider = new GoogleAuthProvider();
  googleBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then(() => {
        alert("Login con Google 🖤");
        window.location.href = "panel.html";
      })
      .catch(err => alert(err.message));
  });
}
