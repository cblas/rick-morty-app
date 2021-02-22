import { configureStore } from "@reduxjs/toolkit";
import episodesReducer from "../features/Episodes/episodesSlice";
import charactersReducer from "../features/Characters/CharacterSlice";

export default configureStore({
  reducer: {
    episodes: episodesReducer,
    characters: charactersReducer,
  },
});