import {ComponentConstants, ControllerConstants} from "../constants";
import globalVariables from "../variables";
import changePage from "./changePage";
import generatePagingList from "../html/generatePaging";

function updateMargins() {
    const LIST = document.querySelector(`#${ComponentConstants.RESULTS_LIST_ID}`);
    if (LIST.style.transition !== ComponentConstants.DEFAULT_TRANSITION) {
        LIST.style.transition = ComponentConstants.DEFAULT_TRANSITION;
    }
    let targetVideosCount = ~~(document.documentElement.clientWidth / (ControllerConstants.DEFAULT_RESULT_WIDTH + ControllerConstants.DEFAULT_RESULT_MARGIN * 2));

    if (targetVideosCount !== globalVariables.loadedVideosDisplayCount) {
        let leftVideoIndex = (globalVariables.currentPageIndex
                                * globalVariables.loadedVideosDisplayCount)
                                + 1;

        globalVariables.loadedVideosDisplayCount = targetVideosCount;
        let targetPageIndex = Math.ceil(leftVideoIndex / globalVariables.loadedVideosDisplayCount) - 1;
        changePage(targetPageIndex);
        generatePagingList();
    }
    LIST.style.transform = `translate(${-globalVariables.currentPageIndex * document.documentElement.clientWidth}px, 0)`;

    const NEW_SIDE_MARGIN_SIZE = (document.documentElement.clientWidth
                                    - (globalVariables.loadedVideosDisplayCount
                                        * (ControllerConstants.DEFAULT_RESULT_WIDTH
                                            + ControllerConstants.DEFAULT_RESULT_MARGIN
                                            * 2)))
                                    / 2
                                    + ControllerConstants.DEFAULT_RESULT_MARGIN
                                    + "px";

    Array.prototype.map.call(LIST.childNodes, function (item, index) {

        item.style.marginLeft = ControllerConstants.DEFAULT_RESULT_MARGIN + "px";
        item.style.marginRight = ControllerConstants.DEFAULT_RESULT_MARGIN + "px";

        if ((index % globalVariables.loadedVideosDisplayCount) === 0) {
            item.style.marginLeft = NEW_SIDE_MARGIN_SIZE;
        }
        if (((index + 1) % globalVariables.loadedVideosDisplayCount) === 0) {
            item.style.marginRight = NEW_SIDE_MARGIN_SIZE;
        }
    });
}

function resize() {
    updateMargins();
}

export default resize;
