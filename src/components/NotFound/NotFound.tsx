import { useSearchParams } from 'react-router-dom';
import styles from './NotFound.module.scss';

export default function NotFound() {
  const [, setSearchParams] = useSearchParams();
  return (
    <div className={styles.not_found}>
      <h3>Контент не найден.</h3>
      <p>Извините, мы не смогли найти то, что вы искали.</p>
      <button onClick={() => setSearchParams({})}>Вернуться на главную</button>
      <p>Или попробуйте поискать другой контент.</p>
    </div>
  );
}
