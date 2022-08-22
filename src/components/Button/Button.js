import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const Button = ({
  to,
  href,
  children,
  text = false,
  primary = false,
  outline = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  leftIcon,
  rightIcon,
  className,
  onClick,
  ...passProps
}) => {
  let Component = 'button';

  const _props = {
    onClick,
    ...passProps,
  };

  // Disabled muti-events
  if (disabled) {
    delete _props.onClick;

    // Object.keys(_props).forEach((key) => {
    //   if (key.startsWith('on') && typeof _props[key] === 'function') {
    //     delete _props[key]
    //   }
    // })
  }

  if (to) {
    _props.to = to;
    Component = Link;
  } else if (href) {
    _props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
  });

  return (
    <Component className={classes} {..._props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  text: PropTypes.bool,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
