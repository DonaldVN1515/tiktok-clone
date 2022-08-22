import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './DetailsAccountItem.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const DetailsAccountItem = () => {
  return (
    <div className={cx('item')}>
      <div className={cx('header')}>
        <Image src="ABC" alt="ABC" />
        <Button primary>Follow</Button>
      </div>

      <div className={cx('infor')}>
        <h4 className={cx('title')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </h4>
        <p>Meomeomeo</p>
      </div>

      <div className={cx('analysis')}>
        <span className={cx('value')}> 8.2M</span>
        <span className={cx('label')}> Followers</span>
        <span className={cx('value')}> 2.8M</span>
        <span className={cx('label')}> Likes</span>
      </div>
    </div>
  );
};
DetailsAccountItem.propTypes = {};
export default DetailsAccountItem;
