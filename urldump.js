function getCurrentWindowTabs() {
    return browser.tabs.query({currentWindow: true});
}

