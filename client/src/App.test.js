import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const title = "React App";
  expect(title).toBe("React App");
});
