import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';

import * as SearchServices from '~/services/searchService';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import { Popper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Search = () => {
  const inputRef = useRef();

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  // https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchApi = async () => {
      const result = await SearchServices.search(debouncedValue);

      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);
  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleSubmit = () => {
    // Search Page
  };
  return (
    <div className={cx('wapper')}>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
            <Popper>
              <h4>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} onClick={() => setShowResult(false)} />
              ))}
            </Popper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <form className={cx('searchbar')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos..."
            spellCheck={false}
            onChange={handleChange}
            onFocus={(e) => setShowResult(true)}
          />
          {!!searchValue && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          <button className={cx('loading')}>{loading && <FontAwesomeIcon icon={faSpinner} />}</button>
          <button className={cx('search')} onClick={handleSubmit} onMouseDown={(e) => e.preventDefault()}>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
            <SearchIcon />
          </button>
        </form>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
