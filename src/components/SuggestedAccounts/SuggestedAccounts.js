import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import AccountItem from './AccountItem';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
const SuggestedAccounts = ({ label }) => {
  return (
    <div className={cx('wapper')}>
      <h6 className={cx('label')}>{label}</h6>

      <AccountItem />
      <AccountItem />
      <AccountItem />

      <span className={cx('see-all')}>See all</span>
      <span className={cx('see-less')}>See less</span>
    </div>
  );
};
SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
