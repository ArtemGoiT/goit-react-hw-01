import './App.css';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
const App = () => {
  return (
    <div className="container">
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
