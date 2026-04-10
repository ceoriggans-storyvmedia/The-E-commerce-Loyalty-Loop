import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase SDK
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Lazy initialize auth to avoid "Component auth has not been registered yet"
let authInstance: any;
export const getAuthInstance = () => {
  if (!authInstance) {
    authInstance = getAuth(app);
  }
  return authInstance;
};

export const googleProvider = new GoogleAuthProvider();
