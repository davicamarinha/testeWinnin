import { cleanup, render, screen, within } from "@testing-library/react";
import CardAnime from "./";

describe("CardAnime Tests", () => {
  beforeAll(() => cleanup());

  it("renders a snapshot", () => {
    const mockTags = ["teste 1", "teste 2", "teste 3"];
    const { container } = render(
      <CardAnime
        label="teste"
        tags={mockTags}
        score={50}
        image="https://i.pinimg.com/originals/e9/76/a2/e976a29e0ffaefd0c16bc2be934cd9dd.jpg"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render two tag", () => {
    const mockTags = ["teste 1", "teste 2"];
    const { getAllByRole } = render(
      <CardAnime
        label="teste"
        tags={mockTags}
        score={50}
        image="https://i.pinimg.com/originals/e9/76/a2/e976a29e0ffaefd0c16bc2be934cd9dd.jpg"
      />
    );

    const list = getAllByRole("tag");

    expect(list).toHaveLength(mockTags.length);
  });
});
