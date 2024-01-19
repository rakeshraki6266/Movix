import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfigaration: (state, action) => {
      state.url = action.payload;
    },
getGenres:(state,action)=>{
    state.genres=action.payload
}
  },
});
export const { getApiConfigaration,getGenres } = homeSlice.actions;

export default homeSlice.reducer;
