import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
require('dotenv').config();

// Suas credenciais do Firebase
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.NOME_DA_VARIAVEL,
  projectId: process.env.NOME_DA_VARIAVEL,
  storageBucket: process.env.NOME_DA_VARIAVEL,
  messagingSenderId: process.env.NOME_DA_VARIAVEL,
  appId: process.env.NOME_DA_VARIAVEL,
  measurementId: process.env.NOME_DA_VARIAVEL,
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ─── CRIAR documento ─────────────────────────────────────
export async function criarDocumento(colecao, dados) {
  try {
    const ref = await addDoc(collection(db, colecao), {
      ...dados,
      criadoEm: new Date(),
    });
    console.log("✅ Item criado com ID:", ref.id);
    return ref.id;
  } catch (e) {
    console.error("❌ Erro ao criar item:", e);
  }
}