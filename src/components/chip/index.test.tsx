import { render } from "@testing-library/react";
import Chip from "./";

describe("Chip Tests", () => {
  it("renders a snapshot", () => {
    const { container } = render(<Chip label="teste" />);
    expect(container).toMatchSnapshot();
  });
});
