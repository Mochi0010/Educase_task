export default function WelcomeScreen({ onNavigate }) {
  return (
    <div className="screen fade-in">
      <div className="welcome">
        <div className="welcome__spacer" />
        <div className="stagger">
          <h1 className="welcome__title">Welcome to PopX</h1>
          <p className="welcome__desc">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>
          <div className="welcome__actions">
            <button
              id="btn-create-account"
              className="btn btn-primary"
              onClick={() => onNavigate('signup')}
            >
              Create Account
            </button>
            <button
              id="btn-login"
              className="btn btn-secondary"
              onClick={() => onNavigate('login')}
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
