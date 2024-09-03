const imageTag = document.querySelector("img")
const deleteButton = document.querySelector(".delete")
const downloadButton = document.querySelector(".download")

chrome.storage.local.get(["imageSrc"])
    .then((result)=> {
        imageTag.src = result.imageSrc
    })

deleteButton.addEventListener("click", removeImage)
downloadButton.addEventListener("click", downloadImage)

function removeImage(){
    imageTag.src = ""
    chrome.storage.local.set({imageSrc : ""})
}

function downloadImage(){
    const a = document.createElement("a")
    a.style.display = "none"
    a.href = imageTag.src
    a.download = imageTag.src
    document.body.appendChild(a)
    a.click()
}