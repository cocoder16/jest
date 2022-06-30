import { reducer, ScoreState, Score, actionTypes } from "./score";
import { ReduxAction } from ".";

describe("score reducers", () => {
  let state: ScoreState = {
    score: 0,
  };

  beforeEach(() => {
    state = {
      score: 0,
    };
  });

  test("Given score is 0, When add score 1, Then score is 1", () => {
    const action: ReduxAction<Score> = {
      type: actionTypes.ADD,
      payload: 1,
    };

    reducer.add(state, action);

    expect(state.score).toEqual(1);
  });

  it("get initial score 100", () => {
    const action: ReduxAction<Score> = {
      type: actionTypes.GET,
      payload: 100,
    };

    reducer.get(state, action);

    expect(state.score).toEqual(100);
  });
});
