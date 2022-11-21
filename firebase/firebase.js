import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
export const firebaseConfig = {
  apiKey: "AIzaSyBbWpAbZ1cpf_a8NJi_8qL43A6tthNXp3I",
  authDomain: "grofast-e2a20.firebaseapp.com",
  projectId: "grofast-e2a20",
  storageBucket: "grofast-e2a20.appspot.com",
  messagingSenderId: "572963731489",
  appId: "1:572963731489:web:963710de0697c30bb44b60",
  measurementId: "G-THVXNG4B80",
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
authentication.useDeviceLanguage()