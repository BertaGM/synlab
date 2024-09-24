import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Loading...' inside a heading", () => {
      const expectedLoadingText = "Loading...";

      render(<Loading />);
      const loadingText = screen.getByRole("heading", {
        name: expectedLoadingText,
      });

      expect(loadingText).toBeInTheDocument();
    });
  });
});
