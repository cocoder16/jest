import { screen } from "@testing-library/react";

import Score, { Props } from "./Score";
import { setUp } from "../testSetUp";

describe("Score", () => {
  const initialProps: Props = {
    score: 0,
  };

  it("Render initial score", () => {
    setUp(Score, initialProps);

    expect(screen.getByText(initialProps.score + "점")).toBeInTheDocument();
  });
});
