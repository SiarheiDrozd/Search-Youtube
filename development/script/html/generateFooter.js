import {ComponentConstants} from "../constants";

export default function () {
    let footer = document.createElement("footer");
    let navigationMenu = document.createElement("nav");
    let pagesList = document.createElement("div");

// setup nodes
    navigationMenu.setAttribute("id", `${ComponentConstants.PAGING_NAV_MENU_ID}`);
    navigationMenu.classList.add(...ComponentConstants.PAGING_NAV_MENU_CLASSES);

    pagesList.setAttribute("id", `${ComponentConstants.PAGING_LIST_ID}`);
    pagesList.classList.add(...ComponentConstants.PAGING_LIST_CLASSES);

// add footer
    footer.appendChild(navigationMenu);
        navigationMenu.appendChild(pagesList);

    document.body.appendChild(footer);
}
