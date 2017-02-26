import {ControllerConstants} from "../constants";
import globalVariables from "../variables";


function cssNumberToNumber(obj) {
    return Number(obj.slice(0, -2));
}

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

    parentNode.style.width = cssNumberToNumber(parentNode.style.width)
        + globalVariables.loadedVideosCount
            * (ControllerConstants.DEFAULT_RESULT_WIDTH
                + ControllerConstants.DEFAULT_RESULT_MARGIN
                * 2)
            + "px";

    if (globalVariables.loadedVideosCount % globalVariables.loadedVideosDisplayCount === 0) {
        insertingNode.style.marginRight = calculateMargin();
        parentNode.style.width = cssNumberToNumber(parentNode.style.width)
            + cssNumberToNumber(insertingNode.style.marginRight)
            + ControllerConstants.DEFAULT_RESULT_MARGIN
            + "px";
    }
    if ((globalVariables.loadedVideosCount - 1) % globalVariables.loadedVideosDisplayCount === 0) {
        insertingNode.style.marginLeft = calculateMargin();
        parentNode.style.width = cssNumberToNumber(parentNode.style.width)
            + cssNumberToNumber(insertingNode.style.marginLeft)
            + ControllerConstants.DEFAULT_RESULT_MARGIN
            + "px";
    }
    parentNode.appendChild(insertingNode);
}
