import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <>
    <ul className={css.listFriends}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            id={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
          />
        );
      })}
    </ul>
  </>
);
export default FriendList;

// Этот код - это компонент FriendList, который отображает список друзей. Вот его основные части:

// import css from './FriendList.module.css'; - Эта строка импортирует стили для компонента из файла FriendList.module.css.

// Использование модульных стилей позволяет изолировать стили компонента от стилей других компонентов.

// const FriendList = ({ friends }) => (

//   - Это объявление компонента FriendList.Он принимает один пропс friends, который является массивом объектов с информацией о друзьях.

// <ul className={css.listFriends}> -

//   Это создает неупорядоченный список HTML. Класс css.listFriends применяется к списку и берется из модульных стилей для стилизации компонента.

//       {friends.map(({ avatar, name, isOnline, id }) => {
//         -

//   Этот код проходит по массиву friends и для каждого друга возвращает компонент FriendListItem, передавая ему необходимые данные о друге в качестве пропсов.

//     < FriendListItem key = { id } id = { id } avatar = { avatar } isOnline = { isOnline } name = { name } /> -

//         Это создает компонент FriendListItem для каждого друга.Каждому компоненту присваивается уникальный ключ id, чтобы React мог эффективно обновлять элементы списка.

//     </ul> - Закрытие тега списка.

//     export default FriendList; - Экспорт компонента FriendList для использования в других частях приложения.

// Этот компонент принимает массив друзей и отображает их в виде списка элементов FriendListItem.
