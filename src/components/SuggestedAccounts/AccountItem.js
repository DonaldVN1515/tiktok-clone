import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Popper } from '~/components/Popper';
import DetailsAccountItem from './DetailsAccountItem';

const cx = classNames.bind(styles);

const AccountItem = () => {
  const renderDetailsAccount = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <Popper>
          <DetailsAccountItem />
        </Popper>
      </div>
    );
  };
  return (
    <div className={cx('tippy')}>
      <Tippy interactive delay={[300, 0]} offset={[25, 10]} placement="bottom" render={renderDetailsAccount}>
        <Link to="" className={cx('item')}>
          <Image src="ABC" alt="ABC" />

          <div className={cx('infor')}>
            <h4 className={cx('title')}>
              <span>Nguyen Van A</span>
              <FontAwesomeIcon icon={faCheckCircle} />
            </h4>
            <p>Meomeomeo</p>
          </div>
        </Link>
      </Tippy>
    </div>
  );
};
AccountItem.propTypes = {};
export default AccountItem;
