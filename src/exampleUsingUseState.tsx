import React, { useState } from 'react';

interface User {
  name: String;
  login: String;
  avatar_url: String;
}

const exampleUsingUseState: React.FC = () => {

  const [user, setUser] = useState<[User]>();

  async function loadData() {
    const response = fetch('http://api.github.com/users/maicongunner');
    const data = await response.json();
    setUser(data);
  }

  return (
    <div>
      {user?.map(user => user.name)}
    </div>
  );
}

export default exampleUsingUseState;