import classNames from 'classnames/bind';
import config from '~/config';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx('wapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Follwing"
          to={config.routes.follwing}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>

      <SuggestedAccounts label="Suggested Accounts" />

      <SuggestedAccounts label="Following Accounts" />
    </div>
  );
};

export default Sidebar;
