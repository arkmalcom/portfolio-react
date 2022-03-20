import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxK8kflkESdV5EyCUmr5kK-bOXCI5sAn8",
  authDomain: "malcomcal-4ff4e.firebaseapp.com",
  projectId: "malcomcal-4ff4e",
  storageBucket: "malcomcal-4ff4e.appspot.com",
  messagingSenderId: "744411749773",
  appId: "1:744411749773:web:df9e97870aacc36694b1c4",
  measurementId: "G-FYT36ZP057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);