import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
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

  const currData = history[history.length - 1];

  const renderItems = () => {
    return currData.data.map((item, index) => {
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

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx('menu')} tabIndex="-1" {...attrs}>
      <Popper className={cx('menu-popper')}>
        {history.length > 1 && <SubMenu title={currData.title} onBack={handleBack} />}
        <div className={cx('menu-body')}> {renderItems()}</div>
      </Popper>
    </div>
  );

  const handleResetPage = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  return (
    <>
      <Tippy
        interactive
        delay={[0, 500]}
        // visible={setHistory.length > 0}
        offset={[8, 4]}
        hideOnClick={hideOnClick}
        placement="bottom-end"
        render={renderResult}
        onHidden={handleResetPage}
      >
        {children}
      </Tippy>
    </>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};

export default Menu;
