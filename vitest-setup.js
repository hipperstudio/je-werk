import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom = undefined;

dom = new JSDOM(html, { runScripts: "dangerously" });
window.container = dom.window.document.body;
