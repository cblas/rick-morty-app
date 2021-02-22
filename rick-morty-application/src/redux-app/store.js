import { configureStore } from "@reduxjs/toolkit";
import episodesReducer from "../features/EpisodesComponent/episodesSlice";

export default configureStore({
  reducer: {
    episodes: episodesReducer,
  },
});