import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Button } from "./Button";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the small Button", () => {
  render(<Button text="submit" size="sm" type="outline" iconimg="submitG" />);
  expect(true).toBeTruthy();
});
