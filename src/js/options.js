/* global chrome */
import React from 'react';
import { render } from 'react-dom';

// Helpers
import { enableBadge, disableBadge } from './helpers/badge';

import App from './containers/App';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  // Set correct badge
  if (initialState.isEnabled) {
    enableBadge();
  } else {
    disableBadge();
  }

  render(
    <App initialState={initialState} />,
    window.document.getElementById('app-container'),
  );
});
