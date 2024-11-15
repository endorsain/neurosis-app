import { secureStoreHelper } from "../../utils/helper/secure-store";
import { requestHelper } from "../../utils/helper/request";
import { setAuth } from "../../store/slices/auth.slice";
import { auth } from "../../config/firebase-config";
import {
  sendEmailVerification,
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signup = async (data) => {
  const response = await requestHelper(
    `${process.env.EXPO_PUBLIC_URL}/common-mobile-user/sign-up`,
    "POST",
    data,
    {}
  );

  const userCredential = await signInWithCustomToken(auth, response.idToken);
  const user = userCredential.user;

  await sendEmailVerification(user);
};

export const signin = async (data, router, dispatch) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    data.eml,
    data.pss
  );
  const user = userCredential.user;
  if (!user.emailVerified) {
    throw new Error("Verifica el email.");
  }

  const idToken = await user.getIdToken();
  const refreshToken = user.refreshToken;

  //TODO: Por ahora no sirve de nada usar el sign-in
  /*   const response = await requestHelper(
    `${process.env.EXPO_PUBLIC_URL}/common-mobile-user/sign-in`,,
    "POST",
    {},
    {
      idToken,
      refreshToken,
    }
  ); */

  /* if (response.success) {
    await secureStoreHelper.setItem("refreshToken", refreshToken);
    await secureStoreHelper.setItem("idToken", idToken);

    dispatch(
      setAuth({
        isAuthenticated: true,
      })
    );

    return router.replace("/");
  } */
  //TODO: Si el usuario no existe --> [FirebaseError: Firebase: Error (auth/invalid-credential).]
  if (idToken) {
    await secureStoreHelper.setItem("refreshToken", refreshToken);
    await secureStoreHelper.setItem("idToken", idToken);

    dispatch(
      setAuth({
        isAuthenticated: true,
      })
    );

    return router.replace("/");
  }
};
