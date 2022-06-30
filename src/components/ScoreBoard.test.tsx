import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import ScoreBoard from "./ScoreBoard";
import { setUpWithStore } from "../testSetUp";

describe("ScoreBoard", () => {
  it("Render add button", () => {
    setUpWithStore(ScoreBoard);

    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it("get initial score 100 and api be called once", async () => {
    const mock = new MockAdapter(axios, { delayResponse: 100 });
    mock.onGet("http://localhost:4000/score").reply(200, { score: 100 });

    setUpWithStore(ScoreBoard);

    await screen.findByText("100점");
    expect(mock.history.get.length).toBe(1);
  });

  test("When fail to get initial score, Then show error message and api be called once", async () => {
    const mock = new MockAdapter(axios, { delayResponse: 100 });
    mock.onGet("http://localhost:4000/score").reply(500);

    setUpWithStore(ScoreBoard);

    await screen.findByText("로딩 실패");
    expect(mock.history.get.length).toBe(1);
  });

  test("Given score is 0, When click +, Then score is 5", () => {
    setUpWithStore(ScoreBoard);
    expect(screen.getByText("0점")).toBeInTheDocument();

    userEvent.click(screen.getByText("+"));

    expect(screen.getByText("5점")).toBeInTheDocument();
  });
});
