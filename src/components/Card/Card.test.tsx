import { render, screen } from "@testing-library/react";
import { charactersMock } from "../../mocks/characterMock"
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it receives a 'Daenerys Targaryen' card", () => {
    test("Then it should show the 'Daenerys Targaryen' into a heading", () => {
      const expectedHeadingText = charactersMock[0];

      render(<Card character={expectedHeadingText} />)
      const characterName = screen.getByRole("heading", {
        name: expectedHeadingText.fullName,
      });

      expect(characterName).toBeInTheDocument();
    })
  })
})
