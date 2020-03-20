import { render } from "@testing-library/react";

describe("The CharacterSearch", () => {
  it("should render properly", () => {
    const { container } = render(<CharacterSearch />);
    expect(container.firstChild).toBeDefined();
  });
});
