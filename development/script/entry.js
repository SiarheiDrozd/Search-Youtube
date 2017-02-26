import generateDocument from "./html/generateDocument";
import generateEvents from "./controller/addEvents";
import changeView from "./controller/resize";
import setupVariables from "./controller/setUpVariables";

window.onload = function () {
    setupVariables();
    generateDocument();
    generateEvents();
};
window.onresize = function () {
    changeView();
};
