import { render, screen } from "@testing-library/react";
import List from "./List";
import { charactersMock } from "../../mocks/characterMock";

describe("Given a List component", () => {
  describe("When it receives a list with 3 characters", () => {
    test("Then it should show number 3", () => {
      const expectedCharacterLength = 3;
      const charactersData = charactersMock; 

      render (<List characters={charactersData}/>);
      const listCharactersLength = screen.getAllByRole("heading").length;

      expect(listCharactersLength).toBe(expectedCharacterLength);
    })
  })
})
