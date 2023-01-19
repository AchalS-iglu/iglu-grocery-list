import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "./app";

export const registerUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
};

export const handleSignOut = async () => {
    await signOut(auth);
}