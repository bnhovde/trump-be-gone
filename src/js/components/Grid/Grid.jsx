/**
*
* Grid
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

function Grid(props) {
    const gridClass = cx({
        grid: true,
        'grid--rev': props.rev,
        'grid--full': props.full,
        'grid--right': props.right,
        'grid--center': props.center,
        'grid--middle': props.middle,
        'grid--bottom': props.bottom,
        'grid--narrow': props.narrow,
        'grid--wide': props.wide,
        'grid--space-between': props.spaceBetween,

    });
    return (
        <div className={gridClass}>
            {props.children}
        </div>
    );
}

Grid.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.element,
        PropTypes.arrayOf(React.PropTypes.element),
    ]),
    rev: PropTypes.bool,
    full: PropTypes.bool,
    right: PropTypes.bool,
    center: PropTypes.bool,
    middle: PropTypes.bool,
    bottom: PropTypes.bool,
    narrow: PropTypes.bool,
    wide: PropTypes.bool,
    spaceBetween: PropTypes.bool,
};

export default Grid;
