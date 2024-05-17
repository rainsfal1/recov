// PasswordInput.tsx
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { lockClosedOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

interface PasswordInputProps {
  password: string;
  onSetPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
                                                       password,
                                                       onSetPassword,
                                                     }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password bg-stone-50 shadow-lg p-4 flex flex-col gap-2 rounded-xl text-gray-500">
      <label htmlFor="password" className="text-2xl">
        Password
      </label>
      <div className="sec-2 flex items-center gap align-baseline">
        <IonIcon className="mr-2 size-10" icon={lockClosedOutline} />
        <input
          onChange={handleInputChange}
          className="pas bg-stone-50 outline-none border-none w-full"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="* * * * * * * *"
          style={{ fontSize: '18px' }}
          value={password}
        />
        <IonIcon
          onClick={toggleShowPassword}
          className="show-hide size-10 mr-4 mb-1"
          icon={showPassword ? eyeOffOutline : eyeOutline}
        />
      </div>
    </div>
  );
};

export default PasswordInput;