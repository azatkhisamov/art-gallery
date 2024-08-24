import classNames from 'classnames';
import { memo } from 'react';
import {
  Painting,
  useGetAuthorQuery,
  useGetLocationQuery,
} from '../../store/apiSlice';
import { useTheme } from '../../helpers/Context';
import styles from './Card.module.scss';

type Props = {
  painting: Painting;
};
const Card = memo(function Card({ painting }: Props) {
  const { theme } = useTheme();
  const { authorId, created, imageUrl, locationId, name } = painting;
  const { data: author } = useGetAuthorQuery(authorId);
  const { data: location } = useGetLocationQuery(locationId);
  return (
    <article className={styles.artCard}>
      <img
        className={styles.artCard__painting}
        src={`https://test-front.framework.team${imageUrl}`}
        alt={name}
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
