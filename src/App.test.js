import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders application successfully", () => {
    render(<App />);

    expect(document.body).toBeInTheDocument();
  });

  test("renders without crashing", () => {
    const { container } = render(<App />);

    expect(container).toBeTruthy();
  });
});
