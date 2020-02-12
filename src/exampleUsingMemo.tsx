import React, { useState, useMemo } from 'react';

interface User {
  name: String;
  login: String;
  avatar_url: String;
}

const exampleUsingUseMemo: React.FC = () => {

  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);

  return (
    <div>
      {}
    </div>
  );
}

export default exampleUsingUseMemo;