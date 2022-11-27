import { createSlice, current } from "@reduxjs/toolkit";

const tictacSlice = createSlice({
  name: "tictac",
  initialState: {
    items: Array(9).fill(""),
    equality: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [3, 6, 8],
      [0, 4, 8],
    ],
    winner: null,
  },
  reducers: {
    isFinished: (state, action) => {
      const { index, turn } = action.payload;
      const equal = current(state.equality);
      const clone = [...state.items];
      if (clone[index] === "") {
        clone[index] = turn;
        state.items = clone;
      }
      for (const cond of equal) {
        let [a, b, c] = cond;
        if (clone[a] && clone[a] == clone[b] && clone[a] == clone[c]) {
          state.winner = clone[a];
        }
      }
    },
    resetGame: (state) => {
      state.items = Array(9).fill("");
      state.winner = null;
    },
  },
});

export const { isFinished, resetGame } = tictacSlice.actions;

export default tictacSlice.reducer;
