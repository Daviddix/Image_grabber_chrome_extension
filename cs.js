let imageSrc

document.addEventListener("click", (e)=>{
    imageSrc = e.srcElement.currentSrc
    if(!imageSrc) return
    chrome.runtime.sendMessage(imageSrc)
    alert("d")
})