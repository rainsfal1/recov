import React from 'react';
import { PageIcon } from '../../../../public/pageIcon/pageIcon.tsx';

const Logo: React.FC = () => {
  return (
    <div className="mt-48 flex items-center justify-center">
      <PageIcon />
      <h2 className="ml-8 text-6xl font-bold">Welcome back!</h2>
    </div>
  );
};

export default Logo;
