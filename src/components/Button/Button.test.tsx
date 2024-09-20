import { render, screen } from "@testing-library/react";
import Button from "./Button";

  describe("Given a Button component", () => {
    describe("When it receives the text 'Hola'", () => {
      test("Then it renders Button with text 'Hola'", () => {
        const buttonText = "Hola";
  
        render(<Button text="Hola" />);
        const buttonElement = screen.getByText(buttonText);
        
        expect(buttonElement).toBeInTheDocument();
    })
  });
});
