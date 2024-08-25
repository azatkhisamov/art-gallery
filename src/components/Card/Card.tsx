import classNames from 'classnames';
import { memo, useState } from 'react';
import {
  Painting,
  useGetAuthorQuery,
  useGetLocationQuery,
} from '../../store/apiSlice';
import { useTheme } from '../../helpers/Context';
import styles from './Card.module.scss';
import SkeletonImage from '../Skeleton/SkeletonImage';

type Props = {
  painting: Painting;
};
const Card = memo(function Card({ painting }: Props) {
  const { theme } = useTheme();
  const { authorId, created, imageUrl, locationId, name } = painting;
  const { data: author } = useGetAuthorQuery(authorId);
  const { data: location } = useGetLocationQuery(locationId);
  const [isLoading, setLoading] = useState(true);

  return (
    <article className={styles.artCard}>
      {isLoading && <SkeletonImage />}
      <img
        className={styles.artCard__painting}
        src={`https://test-front.framework.team${imageUrl}`}
        alt={name}
        onLoad={() => setLoading(false)}
        hidden={isLoading}
      />
      <footer
        className={classNames(styles.artCard__paintingInfo, {
          [styles.dark_theme]: theme === 'dark',
        })}
      >
        <div className={styles.artCard__paintingInfo__visible}>
          <span className={styles.heading}>{name}</span>
          <span className={styles.caption}>{created}</span>
        </div>
        <div className={styles.artCard__paintingInfo__hover}>
          <span className={styles.heading}>{author?.name}</span>
          <span className={styles.caption}>{location?.location}</span>
        </div>
      </footer>
    </article>
  );
});

export default Card;
