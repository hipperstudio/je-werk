import { describe, expect, it } from "vitest";
import { addTodo } from "../src/addTodo";
import { Selectors } from "../src/constants";

describe("addTodo.", () => {
  it("Should add an element to the list passed to the function.", () => {
    const list = window.container.querySelector(`#${Selectors.list}`);
    addTodo("Test value", list);

    expect(list.hasChildNodes()).toBe(true);
  });
});
