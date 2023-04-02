import { doc, setDoc, deleteDoc } from "firebase/firestore";
import db from "../common/firebaseDb";
import { Movie } from "../types";

export const addToFavorite = async (movie: Movie, userId: string) => {
  try {
    await setDoc(
      doc(db, `users/${userId}/favoriteMovies`, movie.id.toString()),
      { ...movie, isFavorite: true },
    );
  } catch (error) {
    console.log(error); // TODO notification
  }
};

export const deleteFromFavorite = async (movie: Movie, userId: string) => {
  try {
    await deleteDoc(
      doc(db, `users/${userId}/favoriteMovies`, movie.id.toString()),
    );
  } catch (error) {
    console.log(error); // TODO notification
  }
};
