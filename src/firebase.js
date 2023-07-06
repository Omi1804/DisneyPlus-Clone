import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD9B0AnVjFSHz_wn5oRQ6px-XzYnWJftKU",
    authDomain: "disneyplus-clone-6f5aa.firebaseapp.com",
    projectId: "disneyplus-clone-6f5aa",
    storageBucket: "disneyplus-clone-6f5aa.appspot.com",
    messagingSenderId: "243686175652",
    appId: "1:243686175652:web:7ecdd5ec8736d8b15e0731"
  };

const firebaseApp = initializeApp(firebaseConfig);
  
const db = getFirestore(firebaseApp);
// const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage, collection};
export default db;
