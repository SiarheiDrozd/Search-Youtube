import {ComponentConstants} from "../constants";

export default function (item, itemStatistics) {
    let listItem = document.createElement("li");
    let previewImage = document.createElement("img");
    let title = document.createElement("span");
    let link = document.createElement("a");
    let description = document.createElement("p");

// description elements:
    let author = document.createElement("span");
    let publicationDate = document.createElement("span");
    let views = document.createElement("span");
    let likes = document.createElement("span");
    let descriptionText = document.createElement("span");

// generate list item
    listItem.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_CLASSES);

// generate video title
    title.innerHTML = item.snippet.title;
    title.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_TITLE_CLASSES);

// generate link
    link.href = `${ComponentConstants.LOADED_VIDEO_ELEMENT_LINK_VALUE}${item.id.videoId}`;
    link.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_LINK_CLASSES);

// generate preview image
    previewImage.src = item.snippet.thumbnails.medium.url;
    previewImage.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_PREVIEW_IMAGE_CLASSES);
    previewImage.setAttribute("alt", ComponentConstants.LOADED_VIDEO_ELEMENT_PREVIEW_IMAGE_ALT);

// generate description
    description.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_DESCRIPTION_CLASSES);

    author.innerHTML = item.snippet.channelTitle;
    author.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_AUTHOR_CLASSES);

    publicationDate.innerHTML = `Published: <span>${item.snippet.publishedAt.slice(0, 10)}</span>`;
    publicationDate.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_DATE_CLASSES);

    views.innerHTML = `views: <span>${itemStatistics.statistics.viewCount}</span>`;
    views.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_VIEWS_CLASSES);

    likes.innerHTML = `likes: <span>${itemStatistics.statistics.likeCount}</span>`;
    likes.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_LIKES_CLASSES);

    descriptionText.innerHTML = `${item.snippet.description}`;
    descriptionText.classList.add(...ComponentConstants.LOADED_VIDEO_ELEMENT_DESCRIPTION_TEXT_CLASSES);

// generate list item
    listItem.appendChild(link);
        link.appendChild(previewImage);
        link.appendChild(title);
    listItem.appendChild(description);
        description.appendChild(author);
        description.appendChild(publicationDate);
        description.appendChild(views);
        description.appendChild(likes);
        description.appendChild(descriptionText);

    return listItem;
}
