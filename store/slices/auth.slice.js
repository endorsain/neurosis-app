import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.loading = false;
    },
    clearAuth(state) {
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;

//TODO: "BANDERA" LA ULTIMA VEZ QUE SE RENDERIZO EL PROYECTO EL USUARIO INICIO SESION.
