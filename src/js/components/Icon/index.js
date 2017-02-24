/**
*
* Icon
*
*/

import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

class Icon extends Component {
    renderGraphic() {
        switch (this.props.icon) {
        case 'close':
            return (
                <path d="M12.1421356,16.1421356 L4.14213562,16.1421356 L4.14213562,12.1421356 L12.1421356,12.1421356 L12.1421356,4.14213562 L16.1421356,4.14213562 L16.1421356,12.1421356 L24.1421356,12.1421356 L24.1421356,16.1421356 L16.1421356,16.1421356 L16.1421356,24.1421356 L12.1421356,24.1421356 L12.1421356,16.1421356 Z" id="Rectangle-221" stroke="none" fill="#000000" fillRule="evenodd" transform="translate(14.142136, 14.142136) rotate(-45.000000) translate(-14.142136, -14.142136)" />
            );
        case 'cross':
            return (
                <polygon points="19.4,10.3 18.7,9.6 14.5,13.8 10.3,9.6 9.6,10.3 13.8,14.5 9.6,18.7 10.3,19.4 14.5,15.2 18.7,19.4 19.4,18.7 15.2,14.5" />
            );
        case 'left':
            return (
                <polyline points="17 9.5 12 14.5 17 19.5" fill="none" stroke="#1d1d1b" strokeMiterlimit="10" />
            );
        case 'right':
            return (
                <polyline points="12 19.5 17 14.5 12 9.5" fill="none" stroke="#1d1d1b" strokeMiterlimit="10" />
            );
        case 'check':
        default:
            return (
                <g>
                    <polygon points="13,19.8 9.6,14.5 10.4,14 13,18 18.6,9.8 19.4,10.4" />
                </g>
            );
        }
    }

    render() {
        const containerClass = cx({
            container: true,
            'container--padding': !this.props.padding,
            'container--nopadding': this.props.nopadding,
            'container--padding-top': this.props.padding && this.props.padding.indexOf('top') > -1,
            'container--padding-right': this.props.padding && this.props.padding.indexOf('right') > -1,
            'container--padding-bottom': this.props.padding && this.props.padding.indexOf('bottom') > -1,
            'container--padding-left': this.props.padding && this.props.padding.indexOf('left') > -1,
            'container--padding-none': this.props.padding && this.props.padding.indexOf('none') > -1,
        });
        const iconClass = cx({
            icon: true,
            'icon--good': this.props.good,
            'icon--bad': this.props.bad,
        });
        const viewBox = this.props.viewBox ? this.props.viewBox : `0 0 ${this.props.width} ${this.props.height}`;
        return (
            <i className={containerClass}>
                <svg
                    width={this.props.width}
                    height={this.props.height}
                    className={iconClass}
                    viewBox={viewBox}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {this.renderGraphic()}
                </svg>
            </i>
        );
    }
}

Icon.defaultProps = {
    icon: 'cart',
    width: '80',
    height: '80',
};

Icon.propTypes = {
    icon: React.PropTypes.string.isRequired,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    viewBox: React.PropTypes.string,
    nopadding: React.PropTypes.bool,
    good: React.PropTypes.bool,
    bad: React.PropTypes.bool,
    padding: React.PropTypes.array,
};

export default Icon;
