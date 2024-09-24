import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

describe("Given a Homepage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text 'Next'", () => {
      const expectedButtonText = "Next";

      render(<Homepage />);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
