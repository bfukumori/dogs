import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const json = await response.json();
    return json;
  }

  return (
    <section onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
        <input type="text"
          onChange={({ target }) => setUsername(target.value)}
          value={username}
        />
        <input type="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  )
}

export default LoginForm
