import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtk8jY9FcUFx8YSOUTpH_vZicPkpiQDg8",
  authDomain: "fullstackpro-74d02.firebaseapp.com",
  projectId: "fullstackpro-74d02",
  storageBucket: "fullstackpro-74d02.firebasestorage.app",
  messagingSenderId: "529287252425",
  appId: "1:529287252425:web:d80f4d09c7b286eeae0018",
  measurementId: "G-G0F309S6C9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };