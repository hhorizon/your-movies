import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../common/firebaseApp";
import { Movie } from "../types";

export const addToFavorite = async (movie: Movie, userId: string) => {
  try {
    await setDoc(
      doc(firestore, `users/${userId}/favoriteMovies`, movie.id.toString()),
      { ...movie, isFavorite: true },
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromFavorite = async (movie: Movie, userId: string) => {
  try {
    await deleteDoc(
      doc(firestore, `users/${userId}/favoriteMovies`, movie.id.toString()),
    );
  } catch (error) {
    console.log(error);
  }
};
