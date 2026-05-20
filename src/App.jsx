import { useState, useCallback } from 'react';
import MobileFrame from './components/MobileFrame';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [user, setUser] = useState(null);

  const navigate = useCallback((s) => setScreen(s), []);

  const handleLogin = useCallback(({ email }) => {
    setUser((prev) => prev || { name: 'Marry Doe', email });
    setScreen('profile');
  }, []);

  const handleSignup = useCallback((data) => {
    setUser(data);
    setScreen('profile');
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    setScreen('welcome');
  }, []);

  return (
    <MobileFrame>
      {screen === 'welcome' && (
        <WelcomeScreen key="welcome" onNavigate={navigate} />
      )}
      {screen === 'login' && (
        <LoginScreen key="login" onLogin={handleLogin} />
      )}
      {screen === 'signup' && (
        <SignupScreen key="signup" onSignup={handleSignup} />
      )}
      {screen === 'profile' && (
        <ProfileScreen key="profile" user={user} onLogout={handleLogout} />
      )}
    </MobileFrame>
  );
}
