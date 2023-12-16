import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUCxqPZaItiT_N0DTabcNgScsT5F5OtRw",
    authDomain: "eatease-7fcc9.firebaseapp.com",
    databaseURL: "https://eatease-7fcc9-default-rtdb.firebaseio.com",
    projectId: "eatease-7fcc9",
    storageBucket: "eatease-7fcc9.appspot.com",
    messagingSenderId: "879322479375",
    appId: "1:879322479375:web:83796669523a3a01105c7a",
    measurementId: "G-YFTSGNQDMM"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)