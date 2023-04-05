import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebaseFn,
  AuthError,
} from "firebase/auth";
import { auth } from "../../common/firebaseApp";
import { UserCredential, UserData } from "../../types";

export const signUp = createAsyncThunk<
  UserData,
  UserCredential,
  { rejectValue: string }
>("auth/signUp", async ({ email, password }: UserCredential, thunkAPI) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    };
  } catch (error) {
    const { code } = error as AuthError;
    return thunkAPI.rejectWithValue(code);
  }
});

export const signIn = createAsyncThunk<
  UserData,
  UserCredential,
  { rejectValue: string }
>("auth/signIn", async ({ email, password }, thunkAPI) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    };
  } catch (error) {
    const { code } = error as AuthError;
    return thunkAPI.rejectWithValue(code);
  }
});

export const signOut = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/signOut",
  async (_, thunkAPI) => {
    try {
      await signOutFirebaseFn(auth);
    } catch (error) {
      const { code } = error as AuthError;
      return thunkAPI.rejectWithValue(code);
    }
  },
);
