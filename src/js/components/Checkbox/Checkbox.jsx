import React, { PropTypes } from 'react';

import Icon from '../../components/Icon';

import styles from './styles.css';

const Checkbox = (props) => {
  return (
    <div className={styles.checkbox}>
      <label className={styles.label}>
        <input
          className={styles.Input}
          type="checkbox"
          name={props.name}
          placeholder={props.name}
          checked={props.checked}
          value={props.value}
          onChange={props.onChange}
        />
        <span className={styles.indicator}>
          <Icon nopadding icon="cross" width="30" height="30" viewBox="8 5 13 16" />
        </span>
        <span className={styles.text}>
          {props.name}
        </span>
        { props.invalid && <span className={styles.error}>{props.invalidMessage}</span> }
      </label>
    </div>
  );
};


/**
 * propTypes
 * @property {string} [text] - The text for the h1.
 */
Checkbox.propTypes = {
  value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
};


export default Checkbox;
