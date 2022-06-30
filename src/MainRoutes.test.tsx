import { screen } from "@testing-library/react";

import MainRoutes from "./MainRoutes";
import { setUpWithAllProvider } from "./testSetUp";

describe("MainRoutes", () => {
  test("'/' render Home", () => {
    setUpWithAllProvider(MainRoutes, "/");

    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

  test("'/score' render ScoreBoard", () => {
    setUpWithAllProvider(MainRoutes, "/score");

    expect(screen.getByTestId("score-board")).toBeInTheDocument();
  });
});
