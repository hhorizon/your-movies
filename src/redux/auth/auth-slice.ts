import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signUp, signIn, signOut } from "./auth-operations";
import { UserData } from "../../types";

type AuthState = {
  userData: UserData;
  isloading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  userData: {
    name: null,
    email: null,
    photoURL: null,
    uid: null,
  },
  isloading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    refreshUser: (state, { payload }: PayloadAction<UserData>) => {
      state.userData = payload;
    },
  },
  extraReducers: (builder) => {
    // signUp
    builder.addCase(signUp.pending, (state, { payload }) => {
      state.isloading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isloading = false;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      } else {
        state.error = "Unknown error";
      }
      state.isloading = false;
    });
    // signIn
    builder.addCase(signIn.pending, (state, { payload }) => {
      state.isloading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.userData = payload;
      state.isloading = false;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      } else {
        state.error = "Unknown error";
      }
      state.isloading = false;
    });
    // signOut
    builder.addCase(signOut.pending, (state, { payload }) => {
      state.isloading = true;
    });
    builder.addCase(signOut.fulfilled, (state, { payload }) => {
      state.userData = initialState.userData;
      state.isloading = false;
      state.error = null;
    });
    builder.addCase(signOut.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      } else {
        state.error = "Unknown error";
      }
      state.isloading = false;
    });
  },
});

export const { refreshUser } = authSlice.actions;

export default authSlice.reducer;
