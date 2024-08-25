import styles from './Skeleton.module.scss';
import SkeletonImage from './SkeletonImage';

function SkeletonGallery() {
  return (
    <div className={styles.gallery}>
      {Array.from({ length: 6 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={styles.skeletonCard}>
          <SkeletonImage />
        </div>
      ))}
    </div>
  );
}

export default SkeletonGallery;
