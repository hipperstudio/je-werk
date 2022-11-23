/**
 * Adds todo to the list.
 *
 * @param {string} value - The value from the input.
 * @param {Element} list - The list where the new value will be added.
 */
export function addTodo(value, list) {
  const li = document.createElement("li");
  li.innerHTML = value;
  list.appendChild(li);
}
