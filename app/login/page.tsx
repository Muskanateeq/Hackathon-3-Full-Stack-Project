"use client"; // This line is required for using hooks like useState and useEffect

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // useRouter for redirection
import Link from 'next/link';
import styles from './login.module.css';
import Logo from "@/components/Logo"
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const router = useRouter(); // For redirection

  useEffect(() => {
    // Check if user has come from signup and show success message
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('signupSuccess') === 'true') {
      setShowSuccessMessage(true);

      // Hide the message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Redirect to home page after login
    router.push('/'); // Simple redirection to home page
  };

  return (
    <>
            {/* Header Section */}
            <div className="bg-gray-100 py-10">
            <div className="pl-4 sm:pl-10 md:pl-32">
              <h1 className="text-2xl sm:text-3xl font-semibold text-blue-950">
                My Account
              </h1>
              <p className="mt-2 text-sm sm:text-base text-black">
                Home
                <span className="mx-1 text-black ">.</span>Pages
                <span className="mx-1 text-pink-500">.</span>
                <span className="text-pink-500">My Account</span>
              </p>
            </div>
          </div>
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Login</h2>
        <p className="text-gray-400 pl-5">Please login using account detail below.</p>

        {/* Success message with green tick */}
        {showSuccessMessage && (
          <div className={styles.successMessage}>
            ✅ Successfully your account is created, please login.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Email Address" className={styles.input} required />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.passwordInputGroup}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={styles.passwordInput}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className={styles.showHideButton}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <Link href="/forgot-password" className={styles.forgotLink}>
              Forgot Your Password?
            </Link>

          </div>
          <button type="submit" className={styles.button}>Log In</button>
        </form>

        <div className={styles.signupText}>
          <p>
            {"Don't have an account?"}<Link href="/signup" className={styles.signupLink}>Signup</Link>
          </p>
        </div>
      </div>
    </div>
    <Logo/>
    </>
  );
};

export default LoginPage;
