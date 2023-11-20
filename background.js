chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    const currentTabUrl = currentTab.url;
    console.log("Current tab URL:", currentTabUrl);
});