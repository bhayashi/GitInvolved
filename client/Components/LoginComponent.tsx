import React, { useState } from 'react';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    console.log(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="inputun">Username: </label>
          <input id="inputun" type="text" onChange={e=>setUsername(e.target.value)} value={username} />
        </div>
        <div>
          <label htmlFor="inputpw">Password: </label>
          <input id="inputpw" type="text" onChange={e=>setPassword(e.target.value)} value={password} />
        </div>
        <a href="https://github.com/login/oauth/authorize?client_id=21b87ca77f7f56db3dcf">
          <input type="button" value="Login with Github" onClick={handleClick} />
        </a>
      </form>
    </>
  )
}

export default LoginComponent;
