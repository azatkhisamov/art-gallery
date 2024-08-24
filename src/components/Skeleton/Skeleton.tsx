import classNames from 'classnames';
import styles from './Skeleton.module.scss';
import { useTheme } from '../../helpers/Context';

function SkeletonGallery() {
  const { theme } = useTheme();
  return (
    <div className={styles.gallery}>
      {Array.from({ length: 6 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={styles.skeletonCard}>
          <div
            className={classNames(styles.skeletonImage, {
              [styles.dark_theme]: theme === 'dark',
            })}
          />
        </div>
      ))}
    </div>
  );
}

export default SkeletonGallery;
