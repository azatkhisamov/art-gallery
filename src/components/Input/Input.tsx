import { useState } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { useTheme } from '../../helpers/Context';
import magnifierLight from '../../assets/magnifierLight.svg';
import magnifierDark from '../../assets/magnifierDark.svg';
import resetBtnLight from '../../assets/resetBtnLight.svg';
import resetBtnDark from '../../assets/resetBtnDark.svg';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Input({ search, setSearch }: Props) {
  const { theme } = useTheme();
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, {
          [styles.focus_input]: focus,
          [styles.dark_theme]: theme === 'dark',
        })}
      >
        <img
          src={theme === 'light' ? magnifierLight : magnifierDark}
          className={styles.container__magnifier}
          alt="Magnifier"
        />
        <input
          className={classNames(styles.container__input, {
            [styles.dark_theme]: theme === 'dark',
          })}
          value={search}
          placeholder="Painting title"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {search && (
          <button
            className={styles.container__resetBtn}
            onClick={() => setSearch('')}
          >
            <img
              src={theme === 'light' ? resetBtnLight : resetBtnDark}
              alt="resetButton"
            />
          </button>
        )}
      </div>
    </div>
  );
}
