import React, { useState, useCallback } from 'react';

interface User {
  name: String;
  login: String;
  avatar_url: String;
}

const exampleUsingUseCallback: React.FC = () => {

  const [users, setUsers] = useState<[User]>();

  const greeting = useCallback(
    (user: User) => alert(`Hello ${user.name}`),
    []
  );

  return (
    <div>
      {}
    </div>
  );
}

export default exampleUsingUseCallback;