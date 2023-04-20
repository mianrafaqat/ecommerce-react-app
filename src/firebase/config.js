import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyC_MdIA90RUU_4T5eIcATpjbnrHN3HLRpE",
  authDomain: "ecommerce-b6301.firebaseapp.com",
  projectId: "ecommerce-b6301",
  storageBucket: "ecommerce-b6301.appspot.com",
  messagingSenderId: "1076256838249",
  appId: "1:1076256838249:web:d9b0fc5dd486dee75bc8f8",
  measurementId: "G-6KQRK8RW7K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
