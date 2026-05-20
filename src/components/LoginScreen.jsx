import { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.includes('@') && email.includes('.') && password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onLogin({ email });
  };

  return (
    <div className="screen slide-in">
      <div className="auth stagger">
        <h1 className="auth__title">
          Signin to your<br />PopX account
        </h1>
        <p className="auth__desc">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              id="login-email"
              className="field__input"
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <label htmlFor="login-email" className="field__label">
              Email Address
            </label>
          </div>
          <div className="field">
            <input
              id="login-password"
              className="field__input"
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <label htmlFor="login-password" className="field__label">
              Password
            </label>
          </div>
          <button
            id="btn-login-submit"
            type="submit"
            className={`btn auth__submit ${isValid ? 'btn-primary' : 'btn-disabled'}`}
            disabled={!isValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
