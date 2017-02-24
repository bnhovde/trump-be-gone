import React from 'react';

import App from '../../containers/App';
import Popup from '../../components/Popup';

class PopupApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
    };
  }

  render() {
    return (
      <Popup>
        <App />
      </Popup>
    );
  }
}

export default PopupApp;
