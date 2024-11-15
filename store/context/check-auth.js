import { secureStoreHelper } from "../../utils/helper/secure-store";
import { requestHelper } from "../../utils/helper/request";
import { clearAuth, setAuth } from "../slices/auth.slice";

export const checkAuth = () => async (dispatch) => {
  try {
    const idToken = await secureStoreHelper.getItem("idToken");
    const refreshToken = await secureStoreHelper.getItem("refreshToken");

    if (idToken === null || refreshToken === null) {
      console.log("no tiene token");
      dispatch(clearAuth());
      return;
    }

    console.log(idToken);
    console.log(refreshToken);

    const response = await requestHelper(
      `${process.env.EXPO_PUBLIC_URL}/common-mobile-user/get-all`,
      "GET",
      {},
      {
        idToken,
        refreshToken,
      }
    );

    if (response.success) {
      await secureStoreHelper.setItem("idToken", response.idToken);
      //await secureStoreHelper.setItem("refreshToken", refreshToken);
      dispatch(
        setAuth({
          isAuthenticated: true,
        })
      );
    } else {
      await secureStoreHelper.removeItem("idToken", idToken);
      await secureStoreHelper.removeItem("refreshToken", refreshToken);
      dispatch(clearAuth());
    }
  } catch (error) {
    console.error("checkauth: ", error);
    dispatch(clearAuth());
  }
};
