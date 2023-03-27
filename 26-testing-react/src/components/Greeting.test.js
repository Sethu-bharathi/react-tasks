import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("Hello world Text checker", () => {
    render(<Greeting />);
    const aboutAnchorNode = screen.getByText("Hello world!");
    expect(aboutAnchorNode).toBeInTheDocument();
  });
  test("Good to see when btn not clicked chacker", () => {
    render(<Greeting />);
    const good = screen.getByText("It's good to see you");
    expect(good).toBeInTheDocument();
  });
  test("Good to see when btn is clicked checker", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const good = screen.getByText("Changed text");
    expect(good).toBeInTheDocument();
    
  });
  test("Good to see when btn iis clicked checker", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const notfound = screen.queryByText("It's good to see you");
      expect(notfound).not.toBeInTheDocument();
    
  });
});
