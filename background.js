chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log(request)
            chrome.storage.local.set({imageSrc : request})
    }
)