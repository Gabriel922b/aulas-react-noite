// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, browserLocalPersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpP1nQPTjjB-slSKt38WMniAvn8mIOQoo",
  authDomain: "primeiro-projeto-noite-1b040.firebaseapp.com",
  projectId: "primeiro-projeto-noite-1b040",
  storageBucket: "primeiro-projeto-noite-1b040.firebasestorage.app",
  messagingSenderId: "1001686671130",
  appId: "1:1001686671130:web:ec0b4f58f3f6cfcc9516a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const persistenceMode = Platform.OS === 'web'
? browserLocalPersistence
: getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, { persistence: persistenceMode });
export { db, auth }