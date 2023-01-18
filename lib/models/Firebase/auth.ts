import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "./app";

export const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
};