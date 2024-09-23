import { render } from "@testing-library/react";
import MobileNavBar from "./MobileNavBar";

describe("Given a MobileBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navigation bar with 'mobile-navbar' class name", () => {
      const expectedClassName = ".mobile-navbar";

      render(<MobileNavBar />);
      const classNameText = document.querySelector(expectedClassName);

      expect(classNameText).toBeInTheDocument();
    });
  });
});
