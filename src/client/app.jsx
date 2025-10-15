import React, { useState, useEffect, useMemo } from 'react';
import { AuthService } from './services/AuthService.js';
import LoginForm from './components/LoginForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import './app.css';

export default function App() {
  const authService = useMemo(() => new AuthService(), []);
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'login';
      if (user) {
        setCurrentView(hash);
      } else {
        setCurrentView('login');
        window.location.hash = 'login';
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [user]);

  const navigate = (view) => {
    window.location.hash = view;
  };

  const handleLogin = async (username, password) => {
    try {
      setError('');
      const userData = await authService.login(username, password);
      setUser(userData);
      navigate('dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('login');
  };

  const renderNavigation = () => {
    if (!user) return null;
    
    return (
      <nav className="app-nav">
        <div className="nav-left">
          <h1 className="app-title">Color Control Dashboard</h1>
        </div>
        <div className="nav-center">
          <button 
            className={currentView === 'dashboard' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => navigate('dashboard')}
          >
            Dashboard
          </button>
          {user.isAdmin && (
            <button 
              className={currentView === 'admin' ? 'nav-btn active' : 'nav-btn'} 
              onClick={() => navigate('admin')}
            >
              Admin Panel
            </button>
          )}
        </div>
        <div className="nav-right">
          <span className="user-info">Welcome, {user.username}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    );
  };

  const renderContent = () => {
    if (!user && currentView !== 'login') {
      return <LoginForm onLogin={handleLogin} error={error} />;
    }

    switch(currentView) {
      case 'login':
        return <LoginForm onLogin={handleLogin} error={error} />;
      case 'dashboard':
        return user ? <Dashboard /> : <LoginForm onLogin={handleLogin} error={error} />;
      case 'admin':
        return user && user.isAdmin ? 
          <AdminPanel authService={authService} /> : 
          <div className="error">Access denied. Admin privileges required.</div>;
      default:
        return user ? <Dashboard /> : <LoginForm onLogin={handleLogin} error={error} />;
    }
  };

  return (
    <div className="app">
      {renderNavigation()}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}