import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ScoreTag from "./";

describe("ScoreTag Tests", () => {
  it("renders a snapshot", () => {
    const { container } = render(<ScoreTag value={50} />);
    expect(container).toMatchSnapshot();
  });

  it("should render red below 50", () => {
    const { queryByTestId } = render(<ScoreTag value={49} />);
    expect(queryByTestId("score")).toHaveClass("bg-asLow");
  });

  it("should render yellow when the value is over or equal 50 and below 80", () => {
    const { queryByTestId } = render(<ScoreTag value={60} />);
    expect(queryByTestId("score")).toHaveClass("bg-asMedium");
  });

  it("should render green when the value is over 80", () => {
    const { queryByTestId } = render(<ScoreTag value={90} />);
    expect(queryByTestId("score")).toHaveClass("bg-asGood");
  });

  it("should render 0% if value is null", () => {
    render(<ScoreTag value={null} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });
});
