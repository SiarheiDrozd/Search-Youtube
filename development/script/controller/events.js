import {ComponentConstants, ControllerConstants} from "../constants";
import globalVariables from "../variables";
import searchVideo from "./searchVideo";
import changePage from "./changePage";

const mouseDown = function (event) {
    const SEARCH_RESULT_LIST = document.querySelector(`#${ComponentConstants.RESULTS_LIST_ID}`);
    globalVariables.mouseDownPosX = event.clientX || event.changedTouches[0].pageX;
    globalVariables.layerPosition = SEARCH_RESULT_LIST.getBoundingClientRect().left;
    globalVariables.isMouseDown = true;
    event.target.parentNode.classList.add(ComponentConstants.CLASS_GRAB);
};

const mouseUp = function (event) {
    if (globalVariables.isMouseDown) {
        event.currentTarget.firstChild.classList.remove(ComponentConstants.CLASS_GRABBING);
        event.target.parentNode.classList.remove(ComponentConstants.CLASS_GRAB);

        const LIST = document.querySelector(`#${ComponentConstants.RESULTS_LIST_ID}`);
        const mPosX = event.clientX || event.changedTouches[0].pageX;

        if (globalVariables.mouseDownPosX < mPosX) {

            if (globalVariables.currentPageIndex === 0) {
                // first page
                LIST.style.transform = `translate(0, 0)`;
            } else {
                //swap left
                changePage(globalVariables.currentPageIndex - ControllerConstants.DEFAULT_PAGE_SWAP_COUNT);
            }
        } else if (globalVariables.mouseDownPosX > mPosX) {
            // swap right
            changePage(globalVariables.currentPageIndex + ControllerConstants.DEFAULT_PAGE_SWAP_COUNT);
        }
        LIST.style.transition = ComponentConstants.RESULTS_LIST_SWIPE_TRANSITION;
        const SWAP_TARGET = LIST.querySelector(`.${ComponentConstants.CLASS_GRAB}`);
        if (SWAP_TARGET) {
            SWAP_TARGET.classList.remove(ComponentConstants.CLASS_GRAB);
        }
        globalVariables.isMouseDown = false;
    }
};

function formSubmit(event) {
    event.preventDefault();
    searchVideo("emulateButton");
}

export {
    mouseDown,
    mouseUp,
    formSubmit,
};
