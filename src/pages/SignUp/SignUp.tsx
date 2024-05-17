// SignUp.tsx
import React, { useState, FormEvent, useEffect } from 'react';
import TextInput from './components/TextInput';
import PasswordInput from './components/PasswordInput';
import SignUpButton from './components/SignUpButton';
import Footer from './components/Footer';
import Header from './components/Header';
import { personOutline, mailOutline } from 'ionicons/icons';

const SignUp: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [fullName, email, password, confirmPassword]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      return;
    }

    // Check if email is valid
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    // Check if password is of sufficient length
    if (password.length < 8) {
      setErrorMessage('Password should be at least 8 characters long');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const newUser = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    async function signUp() {
      const response = await fetch('http://localhost:3000/api/v1/signUp', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      console.log(data);
      console.log('hello');
    }
    signUp();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mt-12 flex-col gap-8 bg-white p-8 l w-full sm:w-64 md:w-2/6 lg:w-128 mx-auto my-auto min-h-screen"
    >
      <Header />
      <TextInput
        label="Full Name"
        placeholder="John Doe"
        icon={personOutline}
        type="text"
        value={fullName}
        onChange={setFullName}
      />
      <TextInput
        label="Email Address"
        placeholder="Username@gmail.com"
        icon={mailOutline}
        type="text" // Change this line
        value={email}
        onChange={setEmail}
      />
      <PasswordInput
        label="Password"
        placeholder="********"
        value={password}
        onChange={setPassword}
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="********"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />
      {errorMessage && <div style={{ color: 'red', fontSize: 16}}>{errorMessage}</div>}
      <SignUpButton />
      <Footer />
    </form>
  );
};

export default SignUp;