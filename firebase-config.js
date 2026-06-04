import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKGpUGDPKVle-w-aOAFgfw4MSUtbb3bAk",
  authDomain: "versah-estoquecontrol.firebaseapp.com",
  projectId: "versah-estoquecontrol",
  storageBucket: "versah-estoquecontrol.firebasestorage.app",
  messagingSenderId: "387233050667",
  appId: "1:387233050667:web:3e816786c05a43f2c03a6e",
  measurementId: "G-VEWW20F14R"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);