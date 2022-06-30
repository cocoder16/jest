import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

import { ReduxAction } from ".";

export type Score = number;

export type ScoreState = {
  score: Score;
};

export const actionTypes = {
  ADD: "SCORE/ADD",
  GET: "SCORE/GET",
};

export const action = {
  addScore: createAction<number>(actionTypes.ADD),
  getScore: createAsyncThunk(
    actionTypes.GET,
    async (_, { rejectWithValue }) => {
      return axios
        .get("http://localhost:4000/score")
        .then((response) => response.data.score);
    }
  ),
};

const initialState: ScoreState = {
  score: 0,
};

export const reducer = {
  add: (state: ScoreState, action: ReduxAction<Score>) => {
    state.score += action.payload;
  },
  get: (state: ScoreState, action: ReduxAction<Score>) => {
    state.score = action.payload;
  },
};

const scoreReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(action.addScore, reducer.add)
    .addCase(action.getScore.fulfilled, reducer.get);
});

export default scoreReducer;
