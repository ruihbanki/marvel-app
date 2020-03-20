import React from "react";
import { render } from "@testing-library/react";
import TestProvider from "../../tests/utils/TestProvider";
import CharacterForm from "./CharacterForm";

describe("The CharacterForm", () => {
  it("should render properly", () => {
    const { container } = render(
      <TestProvider>
        <CharacterForm />
      </TestProvider>
    );
    expect(container.firstChild).toBeDefined();
  });
});
