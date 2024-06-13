import { useState } from 'react';
import './App.css';
import CommunityList from './components/CommunityList';
import JoinCommunityForm from './components/JoinCommunityForm';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
     <JoinCommunityForm setGlitterUsers={setUsers} />
     <CommunityList glitterUsers={users} setGlitterUsers={setUsers} title="🎖️ !!__== Glitterforce Community ==__!! 🎖️" />
    </div>
  );
}

export default App;
