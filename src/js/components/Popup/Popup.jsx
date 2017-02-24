import React from 'react';

import styles from './styles.css';

function Popup(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default Popup;
