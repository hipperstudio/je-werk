import "../styles/reset.css";
import "../styles/kickoff.css";
import { onButtonClick } from "./listeners";
import { Selectors } from "./constants";

const button = document.querySelector(`#${Selectors.button}`);
button.addEventListener("click", onButtonClick);
