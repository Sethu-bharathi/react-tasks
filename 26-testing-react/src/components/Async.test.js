import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async tasks", () => {
  test("task checker", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: () => {
        return [{ id: "p1", title: "good" }];
      },
    });
    render(<Async />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
