// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

// own cnfig
const firebaseConfig = {
    apiKey: "AIzaSyCt5NnQge0f9tYZnEctDS7tAS1RkEe7OAw",
    authDomain: "react-quize-app-22e0b.firebaseapp.com",
    projectId: "react-quize-app-22e0b",
    storageBucket: "react-quize-app-22e0b.appspot.com",
    messagingSenderId: "983705249782",
    appId: "1:983705249782:web:72f24039af14f8b13749d7",
    databaseURL: "https://react-quize-app-22e0b-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// this is for sumit

// const firebaseConfig = {
//     apiKey: "AIzaSyDJBtiz9qEkuuDUt-j2FHQrWK9nJ4WOmyY",
//     authDomain: "react-quiz-dev-fa8ad.firebaseapp.com",
//     projectId: "react-quiz-dev-fa8ad",
//     storageBucket: "react-quiz-dev-fa8ad.appspot.com",
//     messagingSenderId: "784562024062",
//     appId: "1:784562024062:web:4eb4184f364d596119322f",
//     databaseURL: "https://react-quiz-dev-fa8ad-default-rtdb.asia-southeast1.firebasedatabase.app",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.firestore.enablePersistence();
export default app;