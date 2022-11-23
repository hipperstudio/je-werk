import { describe, expect, it } from "vitest";
import { Selectors } from "../src/constants";

describe("Main", () => {
  it("Should render the root container and all the elements.", () => {
    const root = window.container.querySelector("#root");
    const list = window.container.querySelector(`#${Selectors.list}`);
    const button = window.container.querySelector(`#${Selectors.button}`);
    const input = window.container.querySelector(`#${Selectors.input}`);
    expect(root).toBeTruthy();
    expect(list).toBeTruthy();
    expect(button).toBeTruthy();
    expect(input).toBeTruthy();
  });
});
