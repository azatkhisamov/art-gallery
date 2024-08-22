import { memo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../../components/Input/Input';
import styles from './Main.module.scss';
import Gallery from '../../features/Gallery/Gallety';

const Main = memo(function Main() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState<string>(query);
  console.log('это мейн');
  return (
    <main className={styles.main}>
      <Input search={search} setSearch={setSearch} />
      <Gallery search={search} />
    </main>
  );
})

export default Main;
