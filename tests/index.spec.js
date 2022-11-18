import { describe, expect, it } from "vitest";

describe("Main", () => {
  it("Should render the root container.", () => {
    const root = window.container.querySelector("#root");
    expect(root).toBeTruthy();
  });
});
