import styles from './NotFound.module.scss';

type Props = {
  resetFilter: () => void;
};
export default function NotFound({ resetFilter }: Props) {
  return (
    <div className={styles.not_found}>
      <h3>Контент не найден.</h3>
      <p>Извините, мы не смогли найти то, что вы искали.</p>
      <p>Попробуйте очистить фильтр</p>
      <button onClick={() => resetFilter()}>Очистить фильтр</button>
    </div>
  );
}
