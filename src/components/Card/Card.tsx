import classNames from 'classnames';
import { memo } from 'react';
import {
  Painting,
  useGetAuthorQuery,
  useGetLocationQuery,
} from '../../api/apiSlice';
import { useTheme } from '../../Context';
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
          <h1>{name}</h1>
          <h2>{created}</h2>
        </div>
        <div className={styles.artCard__paintingInfo__hover}>
          <h1>{author?.name}</h1>
          <h2>{location?.location}</h2>
        </div>
      </footer>
    </article>
  );
});

export default Card;
