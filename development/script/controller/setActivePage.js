import {ComponentConstants} from "../constants";
import globalVariables from "../variables";

export default function () {
    const PAGES_LIST = document.querySelector(`#${ComponentConstants.PAGING_LIST_ID}`);
    if (PAGES_LIST) {
        const CURRENT_PAGE = PAGES_LIST.querySelector(`#${ComponentConstants.PAGING_LIST_ELEMENT_BASE_ID + globalVariables.currentPageIndex}`);
        const PREVIOUS_PAGE = PAGES_LIST.querySelector(`.${ComponentConstants.CLASS_ACTIVE_PAGE}`);
        if (PREVIOUS_PAGE) {
            PREVIOUS_PAGE.classList.remove(ComponentConstants.CLASS_ACTIVE_PAGE);
        }
        if (CURRENT_PAGE) {
            CURRENT_PAGE.classList.add(ComponentConstants.CLASS_ACTIVE_PAGE);
        }
    }
}
