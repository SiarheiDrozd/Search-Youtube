import {ComponentConstants} from "../constants";

export default function () {
    let main = document.createElement("main");
    let section = document.createElement("section");
    let wrapper = document.createElement("div");
    let list = document.createElement("ul");

    section.setAttribute("id", `${ComponentConstants.RESULTS_LIST_SECTION_ID}`);
    section.classList.add(...ComponentConstants.RESULTS_LIST_SECTION_CLASSES);

    wrapper.setAttribute("id", `${ComponentConstants.RESULTS_LIST_WRAPPER_ID}`);
    wrapper.classList.add(...ComponentConstants.RESULTS_LIST_WRAPPER_CLASSES);

    list.setAttribute("id", `${ComponentConstants.RESULTS_LIST_ID}`);
    list.classList.add(...ComponentConstants.RESULTS_LIST_CLASSES);

    document.body.appendChild(main);
    main.appendChild(section);
    section.appendChild(wrapper);
    wrapper.appendChild(list);
}
