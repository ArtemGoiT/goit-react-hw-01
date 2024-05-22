import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <>
    <li className={CSS.FriendListItem} key={id}>
      <img src={avatar} alt={name} width={100} />
      <p className={CSS.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  </>
);
export default FriendListItem;

// Этот код представляет компонент FriendListItem, который отображает информацию о конкретном друге в списке друзей. Вот его основные части:

// import css from './FriendListItem.module.css'; -
//   Эта строка импортирует стили для компонента из файла FriendListItem.module.css.Эти стили будут применены к элементам внутри компонента.

// import clsx from 'clsx'; - Этот код импортирует библиотеку clsx, которая помогает объединять классы в React - приложениях.
//     Это используется для удобного управления классами элементов в зависимости от условий.

// const FriendListItem = ({ avatar, name, isOnline, id }) => (-
//   Это объявление компонента FriendListItem, который принимает пропсы avatar, name, isOnline и id.

// <li className={CSS.FriendListItem} key={id}> -
//   Это создает элемент списка (<li>) с классом CSS.FriendListItem, который определен в модульных стилях. Ключ id используется для оптимизации рендеринга React.

//     <img src={avatar} alt={name} width={100} /> -
//     Это отображает изображение друга с атрибутами src, alt и width.

//     <p className={CSS.friendName}>{name}</p> -
//     Это отображает имя друга внутри параграфа с классом CSS.friendName.

//     <p className={clsx(css.friendStatus, { [css.online]: isOnline, [css.offline]: !isOnline, })}> -
//       Этот код создает параграф с классом css.friendStatus, который будет иметь дополнительные классы css.online или css.offline в зависимости от значения пропса isOnline.
//       Библиотека clsx используется для условного применения классов.

//       {isOnline ? 'Online' : 'Offline'} -
//       Этот код определяет текст статуса друга в зависимости от значения пропса isOnline.

//     </li> - Закрытие тега элемента списка.

//     export default FriendListItem; - Экспорт компонента FriendListItem для использования в других частях приложения.

// Этот компонент отображает информацию о друге, такую как его аватар, имя и статус (онлайн/оффлайн), и стилизует элементы с использованием модульных стилей.
