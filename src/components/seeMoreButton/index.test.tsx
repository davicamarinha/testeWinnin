import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SeeMoreButton from "./";

describe("SeeMoreButton Tests", () => {
  it("renders a snapshot", () => {
    const { container } = render(
      <SeeMoreButton onClick={() => null} disabled={false} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render grey if is disabled is true", () => {
    const { queryByTestId } = render(
      <SeeMoreButton onClick={() => null} disabled />
    );
    expect(queryByTestId("seeMoreBtn")).toHaveClass("bg-disab");
  });

  it("should return a click", () => {
    const handleClick = jest.fn();

    render(<SeeMoreButton onClick={handleClick} disabled={false} />);

    const button = screen.getByTestId("seeMoreBtn");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
