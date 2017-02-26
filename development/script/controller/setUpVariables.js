import {ControllerConstants} from "../constants";
import globalVariables from "../variables";

export default function () {
    let targetVideosCount = document.documentElement.clientWidth / (ControllerConstants.DEFAULT_RESULT_WIDTH + ControllerConstants.DEFAULT_RESULT_MARGIN * 2);
    globalVariables.loadedVideosDisplayCount = ~~targetVideosCount;
    globalVariables.currentPageIndex = 0;
}
