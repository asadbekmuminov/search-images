import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1cvkiNHdTXlimgz4gJsbib8p3jml8FPY",
  authDomain: "unsplash-project-e3bd9.firebaseapp.com",
  projectId: "unsplash-project-e3bd9",
  storageBucket: "unsplash-project-e3bd9.appspot.com",
  messagingSenderId: "699029308812",
  appId: "1:699029308812:web:ed53628b7054833e7282a9",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signUpLoginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    return error;
  }
};
export const logout = () => {
  signOut(auth)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
