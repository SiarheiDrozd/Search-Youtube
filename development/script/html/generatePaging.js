import {ComponentConstants} from "../constants";
import globalVariables from "../variables";
import createPageButton from "./createPagingElement";
import setActivePage from "../controller/setActivePage";

export default function () {
    const PAGING_LIST = document.querySelector(`#${ComponentConstants.PAGING_LIST_ID}`);
    while (PAGING_LIST.firstChild) {
        PAGING_LIST.removeChild(PAGING_LIST.firstChild);
    }
    globalVariables.pagesCount = Math.ceil(globalVariables.loadedVideosCount / globalVariables.loadedVideosDisplayCount);

    let moreButtonsLayer = document.createElement("div");
    moreButtonsLayer.classList.add(...ComponentConstants.PAGING_LIST_MORE_BUTTONS_LAYER_CLASSES);
    moreButtonsLayer.setAttribute("id", `${ComponentConstants.PAGING_LIST_MORE_BUTTONS_LAYER_ID}`);

    for (let i = 0; i < globalVariables.pagesCount; i++) {
        if (globalVariables.pagesCount > 7 && i > 2 && i < (globalVariables.pagesCount - 3)) {
            if (!PAGING_LIST.querySelector(`#${ComponentConstants.PAGING_LIST_MORE_BUTTON_ID}`)) {

                let moreButton = document.createElement("button");
                moreButton.classList.add(...ComponentConstants.PAGING_LIST_MORE_BUTTON_CLASSES);
                moreButton.setAttribute("id", `${ComponentConstants.PAGING_LIST_MORE_BUTTON_ID}`);

                PAGING_LIST.appendChild(moreButton);
                moreButton.appendChild(moreButtonsLayer);
            }
            moreButtonsLayer.appendChild(createPageButton(i));
        } else {
            PAGING_LIST.appendChild(createPageButton(i));
        }
    }
    setActivePage();
}
