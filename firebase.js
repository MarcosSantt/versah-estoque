// firebase.js — configuração central
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "versah-estoquecontrol.firebaseapp.com",
  projectId: "versah-estoquecontrol",
  storageBucket: "versah-estoquecontrol.firebasestorage.app",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID",
  measurementId: "SEU_MEASUREMENT_ID",
};

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
    console.log("✅ Criado com ID:", ref.id);
    return ref.id;
  } catch (e) {
    console.error("❌ Erro ao criar:", e);
  }
}

// ─── BUSCAR todos os documentos ──────────────────────────
export async function buscarTodos(colecao) {
  const snapshot = await getDocs(collection(db, colecao));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// ─── BUSCAR com filtro ───────────────────────────────────
export async function buscarPor(colecao, campo, valor) {
  const q = query(collection(db, colecao), where(campo, "==", valor));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// ─── ATUALIZAR documento ─────────────────────────────────
export async function atualizarDocumento(colecao, id, dados) {
  try {
    await updateDoc(doc(db, colecao, id), dados);
    console.log("✅ Atualizado:", id);
  } catch (e) {
    console.error("❌ Erro ao atualizar:", e);
  }
}

// ─── DELETAR documento ───────────────────────────────────
export async function deletarDocumento(colecao, id) {
  try {
    await deleteDoc(doc(db, colecao, id));
    console.log("✅ Deletado:", id);
  } catch (e) {
    console.error("❌ Erro ao deletar:", e);
  }
}