import { lazy, memo, Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import Input from '../../components/Input/Input';
import styles from './Main.module.scss';
import { useDebounce } from '../../hooks/useDebounce';
import { useTheme } from '../../helpers/Context';
import SkeletonGallery from '../../components/Skeleton/Skeleton';

const Gallery = lazy(() => import('../../features/Gallery/Gallery'));

const Main = memo(function Main() {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState<string>(query);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams]);
  return (
    <main
      className={classNames(styles.main, {
        [styles.dark_theme]: theme === 'dark',
      })}
    >
      <Input search={search} setSearch={setSearch} />
      <Suspense fallback={<SkeletonGallery />}>
        <Gallery debouncedSearch={debouncedSearch} changeSearch={setSearch} />
      </Suspense>
    </main>
  );
});

export default Main;
