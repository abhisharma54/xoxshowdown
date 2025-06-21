import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  xoxGameData: [],
  level: 3,
  gameLoad: false,
};

const playerDataSlice = createSlice({
  name: "playersData",
  initialState,
  reducers: {
    updatePlayerData: (state, action) => {
      state.xoxGameData = action.payload;
    },
    updateLevel: (state, action) => {
      state.level = action.payload;
    },
    gameLoading: (state) => {
      state.gameLoad = !state.gameLoad;
    },
  },
});

export const { updatePlayerData, updateLevel, gameLoading } =
  playerDataSlice.actions;

export default playerDataSlice.reducer;
