// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { initializeAuth,
    getReactNativePersistence,
    browserLocalPersistence,
    browserCookiePersistence
 } from "firebase/auth";
 import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgjg_DSbRW5HpCLtyVFlbRkGchX1_qBj0",
  authDomain: "primeiro-projeto-noite-1d0d3.firebaseapp.com",
  projectId: "primeiro-projeto-noite-1d0d3",
  storageBucket: "primeiro-projeto-noite-1d0d3.firebasestorage.app",
  messagingSenderId: "28989572588",
  appId: "1:28989572588:web:6413ef0ff7bd3d6bb82cc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const persistenceMode = Platform.OS === 'web'
? browserCookiePersistence
: getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, { persistence: persistenceMode });
export { db, auth }