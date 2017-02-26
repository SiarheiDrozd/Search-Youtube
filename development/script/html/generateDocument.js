import generateSearchForm from "./generateSearchForm";
import generateMainBlock from "./generateMainBlock";
import generateFooter from "./generateFooter";

export default function () {
    let header = document.createElement("header");

    document.body.insertBefore(header, document.body.firstChild);

    generateSearchForm(header);
    generateMainBlock();
    generateFooter();
};
