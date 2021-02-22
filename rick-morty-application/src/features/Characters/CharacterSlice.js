import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../http-configs/api-base';


export const fetchCharacters = createAsyncThunk("fetchCharacters", async () => {
  const response = await API.get("/character");
  return response.data.results;
});

const characterSlice = createSlice({
  name: "characters",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default characterSlice.reducer;