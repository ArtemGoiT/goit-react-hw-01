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

// Этот код представляет компонент Profile, который отображает профиль пользователя. Вот его основные части:

//     import css from './Profile.module.css'; - Эта строка импортирует стили для компонента из файла Profile.module.css.

// const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (-
//   Это объявление компонента Profile, который принимает различные данные пользователя в виде пропсов: username, tag, location, avatar и stats,
//   где stats является объектом с количеством подписчиков (followers), просмотров(views) и лайков(likes).

//     <div className={css.userCard}> - Этот код создает контейнер профиля пользователя с классом css.userCard, который определен в модульных стилях.

//     Внутри контейнера профиля содержится блок с информацией о пользователе, такой как его имя(username), тэг(tag), местоположение(location) и аватар(avatar).
//     Эти данные отображаются в соответствующих тегах HTML с применением классов из модульных стилей.

//     <ul className={css.userList}> - Этот код создает неупорядоченный список с классом css.userList.

//     Внутри списка отображается информация о подписчиках(followers), просмотрах(views) и лайках(likes).
//     Каждый элемент списка содержит название метрики и ее значение, которые также стилизованы с использованием классов из модульных стилей.

//     </div> - Закрытие тега контейнера профиля.

//     export default Profile; - Экспорт компонента Profile для использования в других частях приложения.

// Этот компонент отображает информацию о пользователе, такую как его имя, тэг, местоположение, аватар и статистику, и стилизует элементы с использованием модульных стилей.
