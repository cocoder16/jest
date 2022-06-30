import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./Home";
import { setUpWithAllProvider } from "../testSetUp";

describe("Home", () => {
  const linkText = "go to score";

  it("Render initial score", () => {
    setUpWithAllProvider(Home);

    expect(screen.getByText(linkText)).toBeInTheDocument();
  });

  test("When click link, Then navigate to '/score'", () => {
    const { history } = setUpWithAllProvider(Home);

    userEvent.click(screen.getByText(linkText));

    expect(history.location.pathname).toBe("/score");
  });
});
