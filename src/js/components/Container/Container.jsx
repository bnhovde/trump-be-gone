/**
*
* Container
*
* Adds global padding to elements, use this everywhere you need padding
* instead of adding padding to elements (where you can)
*
* All containers will have left/right padding by default unless 'full' is used
*
* Usage: <Container padding={['top', 'bottom']}>...</Container>
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

function Container(props) {
  const {
    children,
    padding = [],
    limited,
    align,
    full,
    fat,
    autocenter,
    limitPadding,
  } = props;

  const containerClass = cx({
    container: true,
    'container--full': full,
    'container--fat': fat,
    'container--padded-top': padding.find(i => i === 'top'),
    'container--padded-bottom': padding.find(i => i === 'bottom'),
    'container--padded-top-double': padding.find(i => i === 'top-double'),
    'container--padded-bottom-double': padding.find(i => i === 'bottom-double'),
    'container--padded-top-half': padding.find(i => i === 'top-half'),
    'container--padded-bottom-half': padding.find(i => i === 'bottom-half'),
    'container--limited-narrow': limited === 'narrow',
    'container--limited-medium': limited === 'medium',
    'container--limited-wide': limited === 'wide',
    'container--limited-text': limited === 'text',
    'container--limited-site': limited === 'site',
    'container--align-left': align === 'left',
    'container--align-right': align === 'right',
    'container--align-center': align === 'center',
    'container--autocenter': autocenter,
    'container--limit-padding': limitPadding,
  });

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
  padding: PropTypes.array,
  limited: PropTypes.string,
  align: PropTypes.string,
  autocenter: PropTypes.bool,
  limitPadding: PropTypes.bool,
  full: PropTypes.bool,
  fat: PropTypes.bool,
};

export default Container;
