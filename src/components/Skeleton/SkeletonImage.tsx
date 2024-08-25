import classNames from 'classnames';
import styles from './Skeleton.module.scss';
import { useTheme } from '../../helpers/Context';

function SkeletonImage() {
  const { theme } = useTheme();
  return (
    <div
      className={classNames(styles.skeletonImage, {
        [styles.dark_theme]: theme === 'dark',
      })}
    />
  );
}

export default SkeletonImage;
