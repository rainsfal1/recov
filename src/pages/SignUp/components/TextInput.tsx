// TextInput.tsx
import React from 'react';
import { IonIcon } from '@ionic/react';

interface TextInputProps {
  label: string;
  placeholder: string;
  icon: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  icon,
  type,
  value,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input bg-stone-50 shadow-lg p-4 flex flex-col gap-2 rounded-xl text-gray-500">
      <label htmlFor={label} className="text-2xl">
        {label}
      </label>
      <div className="sec-2 flex items-center gap align-baseline">
        <IonIcon className="mr-2 size-10" icon={icon} />
        <input
          className="bg-stone-50 outline-none border-none w-full"
          type={type}
          name={label}
          placeholder={placeholder}
          style={{ fontSize: '18px' }}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
