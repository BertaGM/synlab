import { render } from "@testing-library/react";
import DesktopSidebar from "./DesktopSidebar";

describe("Given a DesktopSidebar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a sidebar with 'sidebar' class name", () => {
      const expectedClassName = ".sidebar";

      render(<DesktopSidebar />);
      const classNameText = document.querySelector(expectedClassName);

      expect(classNameText).toBeInTheDocument();
    });
  });
});
