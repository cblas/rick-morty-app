import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../http-configs/api-base';


export const fetchEpisodes = createAsyncThunk("fetchEpisodes", async (filters) => {
  const response = await API.get("/episode/?name=" + filters.name);
  return response.data.results;
});

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchEpisodes.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchEpisodes.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...action.payload];
    },
    [fetchEpisodes.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default episodesSlice.reducer;