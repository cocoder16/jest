import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { configuration } from "./store";

export const setUp = (
  TestComponent: (...args: any[]) => JSX.Element,
  props?: object
) => {
  return render(<TestComponent {...props} />);
};

export const setUpWithStore = (
  TestComponent: (...args: any[]) => JSX.Element,
  props?: object
) => {
  return render(
    <Provider store={configureStore(configuration)}>
      <TestComponent {...props} />
    </Provider>
  );
};

export const setUpWithAllProvider = (
  TestComponent: (...args: any[]) => JSX.Element,
  path?: string,
  props?: object
) => {
  const history = createMemoryHistory();
  path && history.push(path);

  return {
    history,
    ...render(
      <Router location={history.location} navigator={history}>
        <Provider store={configureStore(configuration)}>
          <TestComponent {...props} />
        </Provider>
      </Router>
    ),
  };
};
