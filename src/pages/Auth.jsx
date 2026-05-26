import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dummy ${isLogin ? 'Login' : 'Signup'} submitted.`);
  };

  return (
    <div className="auth-page container section-padding pt-navbar animate-fade-in">
      <div className="auth-container">
        <div className="auth-header">
          <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-muted">
            {isLogin 
              ? 'Enter your details to access your account.' 
              : 'Sign up to enjoy faster checkout and more.'}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <AnimatePresence mode="popLayout">
            {!isLogin && (
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required={!isLogin} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          
          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password">Password</label>
              {isLogin && <a href="#" className="forgot-password">Forgot?</a>}
            </div>
            <input type="password" id="password" required />
          </div>

          <button type="submit" className="btn btn-primary auth-submit">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button className="toggle-auth-btn" onClick={toggleMode}>
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
