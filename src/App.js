import SocialProfile from './components/social-profile/SocialProfile';
import Statistics from './components/statistics/Statistics'
import FriendList from './components/friend-list/FrienList';
import Transactions from './components/transactions/Transactions';

import friends from './mockData/friends.json';
import statistic from './mockData/statistical-data.json';
import transactions from './mockData/transactions.json';
import './App.scss';

//Mock data for 1-st task
const activityObj = {
  followers: 198,
  views: 3685,
  likes: 492
}

function App() {
  return (
    <div className="container">
      <h2>Task 1. Social profile</h2>
      <SocialProfile
        imgSrc = "./img/TimothyGrant.jpg" 
        name="Timothy Grant"
        tag ="tgrant"
        location="Sao Paulo, Brasil"
        activity = {activityObj} />
      
      <h2>Task 2. Statistics</h2>
      <Statistics
        title = "Upload statistics"
        stats = {statistic}
      />
      <h2>Task 3. Friend-list</h2>
      <FriendList friends={friends}/>
      <h2>Task 4. Transactions</h2>
      <Transactions transactions={transactions}/>
    </div>
  )

}

export default App;
