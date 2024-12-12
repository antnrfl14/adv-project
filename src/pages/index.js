import { useState } from 'react';

export default function LoginRegister() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Simulate registration
    if (firstName && lastName && email && password && password === confirmPassword) {
      alert("Registration successful! You can now log in.");
      setIsRegister(false);
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Simulate password reset
    if (email) {
      alert("Password reset link sent to your email.");
      setIsForgotPassword(false);
    }
  };

  const switchToRegister = (e) => {
    e.preventDefault();
    setIsRegister(true);
    setIsForgotPassword(false);
  };

  const switchToLogin = (e) => {
    e.preventDefault();
    setIsRegister(false);
    setIsForgotPassword(false);
  };

  const switchToForgotPassword = (e) => {
    e.preventDefault();
    setIsForgotPassword(true);
    setIsRegister(false);
  };

  if (isLoggedIn) {
    return (
      <div style={styles.successContainer}>
        <h1>Log in successful!</h1>
        <p>Welcome to the application!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        {!isRegister && !isForgotPassword ? (
          <div>
            <h1 style={styles.header}>Log In</h1>
            <form onSubmit={handleLoginSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>Enter your email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="password" style={styles.label}>Enter your password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.options}>
                <div style={styles.rememberMe}>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={styles.checkbox}
                  />
                  <label htmlFor="rememberMe" style={styles.checkboxLabel}>Remember me</label>
                </div>
                <a href="#" onClick={switchToForgotPassword} style={styles.link}>Forgot password?</a>
              </div>
              <button type="submit" style={styles.button}>Log In</button>
              <div style={styles.registerLink}>
                <span>Don't have an account? <a href="#" onClick={switchToRegister} style={styles.link}>Register</a></span>
              </div>
            </form>
          </div>
        ) : isRegister ? (
          <div>
            <h1 style={styles.header}>Register</h1>
            <form onSubmit={handleRegisterSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label htmlFor="firstName" style={styles.label}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="lastName" style={styles.label}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="password" style={styles.label}>Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.button}>Register</button>
              <div style={styles.registerLink}>
                <span>Already have an account? <a href="#" onClick={switchToLogin} style={styles.link}>Sign In</a></span>
              </div>
            </form>
          </div>
        ) : isForgotPassword ? (
          <div>
            <h1 style={styles.header}>Forgot Password</h1>
            <form onSubmit={handleForgotPasswordSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.button}>Reset Password</button>
              <div style={styles.registerLink}>
                <span>Remember your password? <a href="#" onClick={switchToLogin} style={styles.link}>Sign In</a></span>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundImage: 'url("https://wallpaperaccess.com/full/701802.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    color: '#fff',
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
  },
  header: {
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    color: '#fff',
    fontSize: '0.9rem',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '10px',
  },
  checkboxLabel: {
    color: '#fff',
  },
  button: {
    padding: '10px',
    backgroundColor: '#7393B3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  registerLink: {
    textAlign: 'center',
  },
  link: {
    color: '#7393B3',
    textDecoration: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
};
