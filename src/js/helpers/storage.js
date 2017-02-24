/* global chrome */

const saveKey = (key, value) => {
  chrome.storage.local.set({
    [key]: value,
  });
};

const loadKey = (key) => {
  chrome.storage.local.get(key, result => result);
};

const saveState = (stateObj) => {
  chrome.storage.local.set({ state: JSON.stringify(stateObj) });
};

const loadState = () => {
  return chrome.storage.local.get('state', result => result);
};

export {
  saveKey,
  loadKey,
  saveState,
  loadState,
};
