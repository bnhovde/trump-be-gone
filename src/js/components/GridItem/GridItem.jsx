/**
*
* Grid
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

function GridItem(props) {
  const baseClass = props.base ? `${props.base}` : false;
  const infantClass = props.infant ? `infant--${props.infant}` : false;
  const babyClass = props.baby ? `baby--${props.baby}` : false;
  const childClass = props.child ? `child--${props.child}` : false;
  const teenClass = props.teen ? `teen--${props.teen}` : false;
  const adultClass = props.adult ? `adult--${props.adult}` : false;
  const elderClass = props.elder ? `elder--${props.elder}` : false;

  const basePushClass = props.basePush ? `push--${props.basePush}` : false;
  const infantPushClass = props.infantPush ? `push--infant--${props.infantPush}` : false;
  const babyPushClass = props.babyPush ? `push--baby--${props.babyPush}` : false;
  const childPushClass = props.childPush ? `push--child--${props.childPush}` : false;
  const teenPushClass = props.teenPush ? `push--teen--${props.teenPush}` : false;
  const adultPushClass = props.adultPush ? `push--adult--${props.adultPush}` : false;
  const elderPushClass = props.elderPush ? `push--elder--${props.elderPush}` : false;

  const gridItemClass = cx({
    grid__item: true,
    [baseClass]: props.base,
    [infantClass]: props.infant,
    [babyClass]: props.baby,
    [childClass]: props.child,
    [teenClass]: props.teen,
    [adultClass]: props.adult,
    [elderClass]: props.elder,
    [basePushClass]: props.base,
    [infantPushClass]: props.infantPush,
    [babyPushClass]: props.babyPush,
    [childPushClass]: props.childPush,
    [teenPushClass]: props.teenPush,
    [adultPushClass]: props.adultPush,
    [elderPushClass]: props.elderPush,
  });
  return (
    <div className={gridItemClass}>
      {props.children}
    </div>
  );
}

GridItem.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.element,
    PropTypes.arrayOf(React.PropTypes.element),
  ]),
  base: PropTypes.string,
  infant: PropTypes.string,
  baby: PropTypes.string,
  child: PropTypes.string,
  teen: PropTypes.string,
  adult: PropTypes.string,
  elder: PropTypes.string,
  basePush: PropTypes.string,
  infantPush: PropTypes.string,
  babyPush: PropTypes.string,
  childPush: PropTypes.string,
  teenPush: PropTypes.string,
  adultPush: PropTypes.string,
  elderPush: PropTypes.string,
};

export default GridItem;
