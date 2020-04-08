chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: chrome.extension.getURL('html/index.html'),
    }, (new_tab) => {
    });
});