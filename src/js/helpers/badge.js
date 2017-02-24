/* global chrome */

const enableBadge = () => {
  chrome.browserAction.setIcon({ path: 'icons/on-16.png' });
};

const disableBadge = () => {
  chrome.browserAction.setIcon({ path: 'icons/off-16.png' });
};

export {
  enableBadge,
  disableBadge,
};
