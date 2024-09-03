chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.imageSrc){
            chrome.storage.local.set({imageSrc : request.imageSrc})
        }
    }
)

chrome.runtime.onInstalled.addListener(function () {
    let contexts = ["page", "image", "link"]
        let context = contexts[1];
        let title = "Image Grabber";
        chrome.contextMenus.create({
            id: "Grabber",
            title: title,
            contexts: [context]
        })
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "Grabber") {
        chrome.runtime.sendMessage({imageSrc : info.srcUrl})
    }
});