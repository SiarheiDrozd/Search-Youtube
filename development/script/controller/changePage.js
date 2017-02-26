import {ComponentConstants} from "../constants";
import globalVariables from "../variables";
import searchVideo from "./searchVideo";
import setActivePage from "../controller/setActivePage";

function hideLayer(event) {
    if (event.currentTarget === event.target) {
        event.currentTarget.classList.remove(ComponentConstants.CLASS_VISIBLE);
    }
}

export default function (targetPageIndex) {
    if (typeof targetPageIndex === "object") {
        if (targetPageIndex.target === document.querySelector(`#${ComponentConstants.PAGING_LIST_MORE_BUTTON_ID}`)) {

            const MORE_BUTTONS_LAYER = document.querySelector(`#${ComponentConstants.PAGING_LIST_MORE_BUTTONS_LAYER_ID}`);
            MORE_BUTTONS_LAYER.classList.toggle(ComponentConstants.CLASS_VISIBLE);
            MORE_BUTTONS_LAYER.addEventListener("click", hideLayer);

            targetPageIndex = globalVariables.currentPageIndex;

        } else if (targetPageIndex.target.id) {

            let reg = new RegExp(ComponentConstants.PAGING_LIST_ELEMENT_BASE_ID);
            if (reg.test(targetPageIndex.target.id)) {
                targetPageIndex = Number(targetPageIndex.target.id.replace(reg, ""));
            }
        } else {
            targetPageIndex = globalVariables.currentPageIndex;
        }
    }
    if (typeof targetPageIndex === "number") {
        if (targetPageIndex >= globalVariables.pagesCount - 2 && targetPageIndex !== 0) {
            searchVideo();
        }
        const LIST = document.querySelector(`#${ComponentConstants.RESULTS_LIST_ID}`);
        if (LIST.style.transition !== ComponentConstants.RESULTS_LIST_SWIPE_TRANSITION) {
            LIST.style.transition = ComponentConstants.RESULTS_LIST_SWIPE_TRANSITION;
        }
        LIST.style.transform = `translate3d(${-(targetPageIndex * document.documentElement.clientWidth)}px, 0, 0)`;
        globalVariables.currentPageIndex = targetPageIndex;
        setActivePage();
    }
}
