// EmailInput.tsx
import React from 'react';

interface EmailInputProps {
  email: string;
  onSetEmail: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ email, onSetEmail }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetEmail(event.target.value);
  };

  return (
    <div className="email bg-stone-50 shadow-lg p-4 flex flex-col gap-2 rounded-xl text-gray-500">
      <label htmlFor="email" className="text-2xl">
        Email
      </label>
      <input
        onChange={handleInputChange}
        className="bg-stone-50 outline-none border-none w-full"
        type="text" // Change this line
        name="email"
        placeholder="example@example.com"
        style={{ fontSize: '18px' }}
        value={email}
      />
    </div>
  );
};

export default EmailInput;