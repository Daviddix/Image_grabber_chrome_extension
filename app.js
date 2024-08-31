const imageTag = document.querySelector("img")

chrome.storage.local.get(["imageSrc"])
    .then((result)=> {
        imageTag.src = result.imageSrc
    })