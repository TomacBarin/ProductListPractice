// main.js

import { createHeader } from "./uiComponent.js";
import { createSearchInput } from "./uiComponent.js";

const headerHtml = document.querySelector("#header");
const searchSectionHtml = document.querySelector("#searchSection");

headerHtml.appendChild(createHeader())
searchSectionHtml.appendChild(createSearchInput())

