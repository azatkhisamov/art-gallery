import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type Painting = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};
export const fetchTotalCountPaintings = createAsyncThunk<
  Painting[],
  string,
  { rejectedMeta: unknown }
>('paintings/fetchTotalCountPaintings', async (q) => {
  const responce = await axios.get(
    `https://test-front.framework.team/paintings?q=${q}`
  );
  return responce.data;
});

const paintingsSlice = createSlice({
  name: 'paintings',
  initialState: {
    totalCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTotalCountPaintings.fulfilled, (state, action) => {
      state.totalCount = action.payload.length;
    });
  },
});

export default paintingsSlice.reducer;
