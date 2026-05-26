import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@insforge/sdk';

const insforge = createClient({
  baseUrl: import.meta.env.VITE_INSFORGE_URL,
  anonKey: import.meta.env.VITE_INSFORGE_ANON_KEY
});

const AuthCallback = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        const { data, error: sessionError } = await insforge.auth.getSession();
        
        if (sessionError) {
          setError(sessionError.message);
          setLoading(false);
          return;
        }

        if (data.session) {
          navigate('/');
        } else {
          setError('No session found');
          navigate('/login');
        }
      } catch (err) {
        setError(err.message || 'An error occurred');
        navigate('/login');
      }
      
      setLoading(false);
    };

    handleOAuthCallback();
  }, [navigate]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontSize: '1.2rem'
      }}>
        Processing authentication...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ color: 'red' }}>{error}</div>
        <button onClick={() => navigate('/login')}>Back to Login</button>
      </div>
    );
  }

  return null;
};

export default AuthCallback;
