// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: "next-blog-10410.firebaseapp.com",
	projectId: "next-blog-10410",
	storageBucket: "next-blog-10410.appspot.com",
	messagingSenderId: "200347329891",
	appId: "1:200347329891:web:654f7a578e91b92da75f56",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
