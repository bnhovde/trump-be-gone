/* global chrome */
import { enableBadge, disableBadge } from './helpers/badge';
import { processPage } from './lib/crawler';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  // Set correct badge
  if (initialState.isEnabled) {
    enableBadge();
    processPage('en');
  } else {
    disableBadge();
  }

  // Listen to page changes
  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
      // Run script if plugin is enabled
      if (initialState.isEnabled) {
        processPage('en');
      }
    }
  });
});
