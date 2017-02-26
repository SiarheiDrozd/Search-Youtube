import {ControllerConstants} from "../constants";
import globalVariables from "../variables";


function calculateMargin() {
    return (document.documentElement.clientWidth
            - (globalVariables.loadedVideosDisplayCount
                * (ControllerConstants.DEFAULT_RESULT_WIDTH
                    + ControllerConstants.DEFAULT_RESULT_MARGIN
                    * 2)))
            / 2
            + ControllerConstants.DEFAULT_RESULT_MARGIN
            + "px";
}

export default function (parentNode, insertingNode) {
    if (globalVariables.loadedVideosCount % globalVariables.loadedVideosDisplayCount === 0) {
        insertingNode.style.marginRight = calculateMargin();
    }
    if ((globalVariables.loadedVideosCount - 1) % globalVariables.loadedVideosDisplayCount === 0) {
        insertingNode.style.marginLeft = calculateMargin();
    }
    parentNode.appendChild(insertingNode);
}
