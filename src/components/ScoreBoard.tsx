import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Score from "./Score";
import { action } from "../store/score";
import { RootState, AppDispatch } from "../store";

function ScoreBoard() {
  const score = useSelector((state: RootState) => state.score.score);
  const dispatch = useDispatch<AppDispatch>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onClick = () => {
    dispatch(action.addScore(5));
  };

  useEffect(() => {
    dispatch(action.getScore())
      .unwrap()
      .catch((error) => {
        setErrorMessage("로딩 실패");
      });
  }, [dispatch]);

  return (
    <div data-testid="score-board">
      <button type="button" onClick={onClick}>
        +
      </button>
      <Score score={score} />
      <div>{errorMessage && errorMessage}</div>
    </div>
  );
}

export default ScoreBoard;
