import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
  const classes = cx('menuItem', {
    separate: data.separate,
  });

  return (
    <>
      {/* to={data.to} */}
      <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
        {data.title}
      </Button>
    </>
  );
};

export default MenuItem;
