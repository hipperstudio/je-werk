import { addTodo } from "./addTodo";
import { Selectors } from "./constants";

/**
 * Handles button click to add an element to the 'todo' list.
 */
export function onButtonClick() {
  const input = document.querySelector(`#${Selectors.input}`);
  const list = document.querySelector(`#${Selectors.list}`);
  addTodo(input.value, list);
}
