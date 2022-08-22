import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const MenuItem = ({ title, icon, activeIcon, to }) => {
  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('icon-active')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
