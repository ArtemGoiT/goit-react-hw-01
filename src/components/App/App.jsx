import './App.css';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';

import userData from '../../userData.json';
import friends from '../../friends.json';
const App = () => {
  return (
    <div className="container">
      <Profile {...userData} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
