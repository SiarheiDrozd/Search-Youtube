import {ComponentConstants} from "../constants";
import searchVideo from "./searchVideo";
import swipeSR from "./swipeSerchResults";
import {mouseDown, mouseUp, formSubmit} from "./events";
import changePage from "../controller/changePage";

export default function () {
    let searchForm = document.querySelector(`#${ComponentConstants.SEARCH_FORM_ID}`);
    let searchButton = document.querySelector(`#${ComponentConstants.SEARCH_FORM_SUBMIT_ID}`);
    let searchResultsList = document.querySelector(`#${ComponentConstants.RESULTS_LIST_ID}`);
    let pagingList = document.querySelector(`#${ComponentConstants.PAGING_LIST_ID}`);

    searchButton.addEventListener("click", searchVideo);
    searchForm.addEventListener("submit", formSubmit);
    searchResultsList.addEventListener("mousemove", swipeSR);
    searchResultsList.addEventListener("touchmove", swipeSR);
    searchResultsList.addEventListener("mousedown", mouseDown);
    searchResultsList.addEventListener("touchstart", mouseDown);
    pagingList.addEventListener("click", changePage);
    document.body.addEventListener("mouseup", mouseUp);
    document.body.addEventListener("touchend", mouseUp);
}
