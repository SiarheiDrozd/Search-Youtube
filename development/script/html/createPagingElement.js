import {ComponentConstants} from "../constants";

export default function (index) {
    const PAGE_BUTTON = document.createElement("button");

    PAGE_BUTTON.classList.add(...ComponentConstants.PAGING_LIST_ELEMENT_CLASSES);
    PAGE_BUTTON.setAttribute("id", ComponentConstants.PAGING_LIST_ELEMENT_BASE_ID + index);
    PAGE_BUTTON.innerHTML = index + 1;

    return PAGE_BUTTON;
}
