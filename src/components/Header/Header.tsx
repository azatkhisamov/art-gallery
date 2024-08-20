import { useContext, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';
import logoBlack from '../../assets/logo/logo-large-black.svg';
import logoWhite from '../../assets/logo/logo-large-white.svg';
import lightThemeToggle from '../../assets/light-theme.svg';
import darkThemeToggle from '../../assets/dark-theme.svg';
import { ThemeContext } from '../../Context';

const preloadImages = (srcArray: string[]) => {
  srcArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

type Props = {
  toggleTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};
export default function Header({ toggleTheme }: Props) {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    preloadImages([logoBlack, logoWhite, lightThemeToggle, darkThemeToggle]);
  }, []);
  return (
    <header
      className={classNames(styles.header, {
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <nav className={styles.header__nav}>
        <img
          className={styles.header__nav__logo}
          src={theme === 'light' ? logoBlack : logoWhite}
          alt="Logo"
        />
        <button
          className={classNames(styles.header__nav__themeToggle, {
            [styles.darkBackground]: theme === 'dark',
          })}
          onClick={
            theme === 'light'
              ? () => toggleTheme('dark')
              : () => toggleTheme('light')
          }
        >
          <img
            src={theme === 'light' ? darkThemeToggle : lightThemeToggle}
            alt="Toggle theme"
          />
        </button>
      </nav>
    </header>
  );
}
