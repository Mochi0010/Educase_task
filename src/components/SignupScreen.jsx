import { useState } from 'react';

export default function SignupScreen({ onSignup }) {
  const [form, setForm] = useState({
    fullName: 'Marry Doe',
    phone: '9876543210',
    email: 'Marry@Gmail.Com',
    password: 'password123',
    company: 'Marry Doe',
    isAgency: 'yes',
  });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const isValid =
    form.fullName.trim().length >= 2 &&
    form.phone.trim().length >= 6 &&
    form.email.includes('@') &&
    form.email.includes('.') &&
    form.password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onSignup({
      name: form.fullName.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      isAgency: form.isAgency === 'yes',
    });
  };

  return (
    <div className="screen slide-in">
      <div className="auth stagger">
        <h1 className="auth__title">
          Create your<br />PopX account
        </h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              id="signup-fullname"
              className="field__input"
              type="text"
              placeholder=" "
              value={form.fullName}
              onChange={update('fullName')}
              autoComplete="name"
            />
            <label htmlFor="signup-fullname" className="field__label field__label--req">
              Full Name
            </label>
          </div>
          <div className="field">
            <input
              id="signup-phone"
              className="field__input"
              type="tel"
              placeholder=" "
              value={form.phone}
              onChange={update('phone')}
              autoComplete="tel"
            />
            <label htmlFor="signup-phone" className="field__label field__label--req">
              Phone number
            </label>
          </div>
          <div className="field">
            <input
              id="signup-email"
              className="field__input"
              type="email"
              placeholder=" "
              value={form.email}
              onChange={update('email')}
              autoComplete="email"
            />
            <label htmlFor="signup-email" className="field__label field__label--req">
              Email address
            </label>
          </div>
          <div className="field">
            <input
              id="signup-password"
              className="field__input"
              type="password"
              placeholder=" "
              value={form.password}
              onChange={update('password')}
              autoComplete="new-password"
            />
            <label htmlFor="signup-password" className="field__label field__label--req">
              Password
            </label>
          </div>
          <div className="field">
            <input
              id="signup-company"
              className="field__input"
              type="text"
              placeholder=" "
              value={form.company}
              onChange={update('company')}
              autoComplete="organization"
            />
            <label htmlFor="signup-company" className="field__label">
              Company name
            </label>
          </div>
          <div className="radio-group">
            <span className="radio-group__title">
              Are you an Agency?<span style={{ color: '#FF4D4D' }}>*</span>
            </span>
            <div className="radio-group__options">
              <label className="radio-opt">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={update('isAgency')}
                />
                Yes
              </label>
              <label className="radio-opt">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={update('isAgency')}
                />
                No
              </label>
            </div>
          </div>
          <button
            id="btn-signup-submit"
            type="submit"
            className={`btn auth__submit ${isValid ? 'btn-primary' : 'btn-disabled'}`}
            disabled={!isValid}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
