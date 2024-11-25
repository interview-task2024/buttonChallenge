import {
    fireEvent, render, screen
} from "@testing-library/react";
import App from "./App";
test("Text on button change on Click",  async () => {
    render(<App />);
    const buttonClick = screen.getByRole('button');

    fireEvent.click(buttonClick);
     expect(screen.queryByText('Button Clicked')).toBeInTheDocument();
 
});
