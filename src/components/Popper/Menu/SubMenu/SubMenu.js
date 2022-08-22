import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SubMenu.module.scss';

const cx = classNames.bind(styles);

const SubMenu = ({ title, onBack }) => {
  return (
    <>
      <header className={cx('header')}>
        <button className={cx('backBtn')} onClick={onBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h4 className={cx('title')}> {title}</h4>
      </header>
    </>
  );
};
SubMenu.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};
export default SubMenu;
