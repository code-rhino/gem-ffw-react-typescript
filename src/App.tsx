import React from 'react';
import logo from './logo.svg';
import './App.css';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  profilePicture?: string;
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>{user.age}</p>
      {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
    </div>
  );
}

function App() {
  const user: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
  }

  return (
    <div className="App">
      <UserProfile user={user} />
    </div>
  );
}

export default App;
