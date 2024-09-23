import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an 'Details' text", () => {
      const expectedText = "Details";

      render(<NavBar />);
      const navBarText = screen.getByText(expectedText);

      expect(navBarText).toBeInTheDocument();
    });
  });
});
