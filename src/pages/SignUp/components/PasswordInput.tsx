// PasswordInput.tsx
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { lockClosedOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

interface PasswordInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
                                                       label,
                                                       placeholder,
                                                       value,
                                                       onChange,
                                                     }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password bg-stone-50 shadow-lg p-4 flex flex-col gap-2 rounded-xl text-gray-500">
      <label htmlFor="password" className="text-2xl">
        {label}
      </label>
      <div className="sec-2 flex items-center gap align-baseline">
        <IonIcon className="mr-2 size-10" icon={lockClosedOutline} />
        <input
          onChange={handleInputChange}
          value={value}
          className="pas bg-stone-50 outline-none border-none w-full"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder={placeholder}
          style={{ fontSize: '18px' }}
        />
        <IonIcon
          className="show-hide size-10 mr-4 mb-1"
          icon={showPassword ? eyeOffOutline : eyeOutline}
          onClick={toggleShowPassword}
        />
      </div>
    </div>
  );
};

export default PasswordInput;