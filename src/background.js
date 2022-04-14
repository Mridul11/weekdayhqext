chrome.runtime.onInstalled.addListener(() => {
  console.log("registered!", chrome.action);
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
