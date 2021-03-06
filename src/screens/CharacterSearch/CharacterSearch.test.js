import React from "react";
import { render } from "@testing-library/react";
import TestProvider from "../../tests/utils/TestProvider";
import CharacterSearch from "./CharacterSearch";

describe("The CharacterSearch", () => {
  it("should render properly", () => {
    const { container } = render(
      <TestProvider>
        <CharacterSearch />
      </TestProvider>
    );
    expect(container.firstChild).toBeDefined();
  });
});
