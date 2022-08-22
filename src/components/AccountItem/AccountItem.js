import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
  return (
    <Link to={`@${data.nickname}`} className={cx('wapper')}>
      <Image src={data.avatar} alt={data.full_name} />

      <div className={cx('infor')}>
        <h4 className={cx('title')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
        </h4>
        <p>{data.nickname}</p>
      </div>
    </Link>
  );
};
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
