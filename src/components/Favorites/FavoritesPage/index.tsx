import React from "react";
import { useIntl } from "react-intl";
// import { doc, setDoc, getFirestore } from "firebase/firestore";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import messages from "./messages";
// import { AuthContext } from "../../Unknown/AuthProvider";
// import db from "../../../common/firebaseDb";

// const createDoc = async () => {
//   try {
//     await setDoc(
//       doc(
//         db,
//         "users/UlNttQC6iLOngm6YBBlD5KQE3pT2/favoriteMovies",
//         "qweqweячсфывzxc",
//       ),
//       {
//         name: "Los Angeles",
//         state: "CA",
//         country: "USA",
//       },
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

const FavoritesPage: React.FC = () => {
  const intl = useIntl();
  //   const user = useContext(AuthContext);

  return (
    <Box pt={18} pb={5} height="100%" display="flex" flexDirection="column">
      <Typography variant="h4">{intl.formatMessage(messages.title)}</Typography>
      <Typography mb={6}>{intl.formatMessage(messages.subtitle)}</Typography>

      {/* <button onClick={() => createDoc()}>qwe</button> */}

      {/* {status === "loading" && <Loader />} */}

      {/* {trendsMoviesData?.results && (
        <MoviesList movies={trendsMoviesData.results} />
      )} */}
    </Box>
  );
};
export default FavoritesPage;
