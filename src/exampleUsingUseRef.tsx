import React, { useRef } from 'react';

interface User {
  name: String;
  login: String;
  avatar_url: String;
}

const useExampleUseRef: React.FC = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  
  function focusOnInput() {
    inputRef.current?.focus(); 
  }

  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
}

export default useExampleUseRef;