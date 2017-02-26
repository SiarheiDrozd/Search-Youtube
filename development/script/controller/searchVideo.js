import {ComponentConstants, ControllerConstants} from "../constants";
import generateResultNode from "../html/createSearchResultElement";
import globalVariables from "../variables";
import insertNode from "./insertNode";
import generatePagingList from "../html/generatePaging";
import changePage from "./changePage";

function searchVideo(event) {
    let searchLine = document.querySelector(`#${ComponentConstants.SEARCH_FORM_INPUT_ID}`).value;
    let apiKey = ControllerConstants.DEFAULT_YOUTUBE_API_KEY;
    let pageToken = globalVariables.nextPageToken;
    let videosCount = ControllerConstants.DEFAULT_VIDEO_LOAD_COUNT;
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&pageToken=${pageToken}&type=video&part=snippet&maxResults=${videosCount}&q=${searchLine}`)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        })
        .then((result) => result.json())
        .then((data) => processResult(data, event))
        .catch(function (error) {
            console.log("Request failed", error);
        });
}

function processResult(data, event) {
    globalVariables.nextPageToken = data.nextPageToken;
    let resultVideos = data.items;
    let parentToInsert = document.querySelector(`#${ComponentConstants.RESULTS_LIST_ID}`);

    if (event) {
        while (parentToInsert.firstChild) {
            parentToInsert.removeChild(parentToInsert.firstChild);
        }
        globalVariables.currentPageIndex = 0;
        globalVariables.loadedVideosCount = 0;
        changePage(0);
        generatePagingList();
    }

    let idSet = [];
    resultVideos.forEach((item) => {
        idSet.push(item.id.videoId);
    });

// getting statistic for loaded videos
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${idSet.join(",")}&key=${ControllerConstants.DEFAULT_YOUTUBE_API_KEY}`)
        .then((result) => result.json())
        .then((data) => {
            let statistics = data.items;
            resultVideos.forEach((item, index) => {
                globalVariables.loadedVideosCount += 1;
                insertNode(parentToInsert, generateResultNode(item, statistics[index]));
            });
            generatePagingList();
        });
}

export default searchVideo;
