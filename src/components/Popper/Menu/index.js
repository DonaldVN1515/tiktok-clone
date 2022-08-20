import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Popper } from '~/components/Popper';
import SubMenu from './SubMenu';

const cx = classNames.bind(styles);

const defaultFunction = () => {};
const Menu = ({ children, items = [], onChange = defaultFunction, hideOnClick = false }) => {
  const [history, setHistory] = useState([{ data: items }]);

  const curr = history[history.length - 1];

  const renderItems = () => {
    return curr.data.map((item, index) => {
      const isParent = !!item.submenu;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.submenu]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <>
      <HeadlessTippy
        interactive
        delay={[0, 500]}
        // visible //={setHistory.length > 0}
        offset={[8, 4]}
        hideOnClick={hideOnClick}
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('menu')} tabIndex="-1" {...attrs}>
            <Popper className={cx('menu-popper')}>
              {history.length > 1 && (
                <SubMenu
                  title="Language"
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              )}

              <div className={cx('menu-body')}> {renderItems()}</div>
            </Popper>
          </div>
        )}
        onHidden={() => {
          setHistory((prev) => prev.slice(0, 1));
        }}
      >
        {children}
      </HeadlessTippy>
    </>
  );
};

export default Menu;
