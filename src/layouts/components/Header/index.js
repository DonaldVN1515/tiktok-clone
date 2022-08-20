import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faSignIn,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/components/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '~/layouts/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    submenu: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback & Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts',
  },
];

const Header = () => {
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View Profile',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  const currUser = true;

  const handleMenuChange = (menuItem) => {
    // console.log(menuItem);

    switch (menuItem.type) {
      case 'language':
        // HANDLE CHANGE LANGUAGE

        break;

      default:
        break;
    }
  };
  return (
    <>
      <header className={cx('wapper')}>
        <div className={cx('inner')}>
          {/* Logo */}
          <Link to={config.routes.home} className={cx('logo')}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
          {/* Search */}
          <Search />
          {/* Btns */}

          <div className={cx('actions')}>
            {currUser ? (
              <>
                <Tippy delay={[0, 50]} content="Upload Video" placement="bottom">
                  <button className={cx('actionBtn')}>
                    {/* <FontAwesomeIcon icon={faCloudArrowUp} /> */}
                    <UploadIcon />
                  </button>
                </Tippy>
                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                  <button className={cx('actionBtn')}>
                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                    <MessageIcon />
                  </button>
                </Tippy>
                <Tippy delay={[0, 50]} content="Notification" placement="bottom">
                  <button className={cx('actionBtn')}>
                    {/* <FontAwesomeIcon icon={faBell} /> */}
                    <InboxIcon />
                  </button>
                </Tippy>
              </>
            ) : (
              <>
                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                  Upload
                </Button>
                <Button
                  primary
                  rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                  // className={cx('customLogin')}
                  // to="login"
                  // href="https://www.facebook.com/"
                  // onClick={() => {alert("Hello")}}
                  // target="_blank"
                >
                  Login
                </Button>
              </>
            )}

            <Menu items={currUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
              {currUser ? (
                <Image
                  className={cx('userAvt')}
                  src="https://vnn-imgs-f.vgcloud.vn/2020/02/19/21/iu-ava.jpg"
                  // fallback="https://www.gluwee.com/wp-content/uploads/2021/09/IU_cover.jpg"
                  alt="Nguyen Van A"
                />
              ) : (
                <>
                  <button className={cx('moreBtn')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </>
              )}
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
