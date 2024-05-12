import css from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <>
    <div className={css.userCard}>
      <div className={css.userCardTitle}>
        <img src={avatar} alt={username} />
        <p className={css.userName}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userList}>
        <li>
          <span className={css.viewsFollowers}>Followers</span>
          <span className={css.followers}>{followers}</span>
        </li>
        <li>
          <span className={css.views}>Views</span>
          <span className={css.topViews}>{views}</span>
        </li>
        <li>
          <span className={css.likes}>Likes</span>
          <span className={css.likesTop}>{likes}</span>
        </li>
      </ul>
    </div>
  </>
);

export default Profile;
