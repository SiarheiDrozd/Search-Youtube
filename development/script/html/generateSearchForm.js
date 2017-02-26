import {ComponentConstants} from "../constants";

export default function (parentNode) {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let submitButton = document.createElement("button");

    form.setAttribute("id", ComponentConstants.SEARCH_FORM_ID);
    form.setAttribute("name", ComponentConstants.SEARCH_FORM_NAME);
    form.classList.add(...ComponentConstants.SEARCH_FORM_CLASSES);

    input.setAttribute("id", ComponentConstants.SEARCH_FORM_INPUT_ID);
    input.setAttribute("name", ComponentConstants.SEARCH_FORM_NAME);
    input.setAttribute("placeholder", ComponentConstants.SEARCH_FORM_INPUT_PLACEHOLDER);
    input.setAttribute("type", ComponentConstants.SEARCH_FORM_INPUT_TYPE);
    input.classList.add(...ComponentConstants.SEARCH_FORM_INPUT_CLASSES);

    submitButton.setAttribute("id", ComponentConstants.SEARCH_FORM_SUBMIT_ID);
    submitButton.setAttribute("type", ComponentConstants.SEARCH_FORM_SUBMIT_TYPE);
    submitButton.setAttribute("name", ComponentConstants.SEARCH_FORM_NAME);
    submitButton.classList.add(...ComponentConstants.SEARCH_FORM_SUBMIT_CLASSES);
    submitButton.innerHTML = ComponentConstants.SEARCH_FORM_SUBMIT_CONTENT;

    form.appendChild(input);
    form.appendChild(submitButton);

    if (parentNode) {
        parentNode.appendChild(form);
    } else {
        document.body.insertBefore(form, document.body.firstChild);
    }
}
