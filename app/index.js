/*
 * Entry point for the watch app
 */
import document from "document";
import utils from "./utils";

utils.setEmptyState();

let buttons = document.getElementsByClassName("btn");

buttons.forEach(button => {
    button.onmousedown = () => button.style.fill = "fb-blue";
    button.onmouseup = () => button.style.fill = "fb-black";
    button.onactivate = () => handleBtnType(button.text);
});

const handleBtnType = label => {
    switch(label) {
        case 'clear':
            utils.setEmptyState();
            break;
        case 'back':
            utils.clearLast();
            break;
        default:
            utils.setInput(label);
            break;
    }
};
