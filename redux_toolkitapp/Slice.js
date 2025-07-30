import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "dictionary",
  initialState: [
    {
      en: "Computer",
      tr: "Bilgisayar",
    },
    {
      en: "Bottle",
      tr: "Şişe",
    },
    {
      en: "Book",
      tr: "Kitap",
    },
    {
      en: "Tea",
      tr: "Çay",
    },
    {
      en: "Table",
      tr: "Masa",
    },
  ],
  reducers: {
    add(state, action) {
      const word = action.payload;
      state.push(word);
    },
  },
});

export default Slice;
export const { add } = Slice.actions;
