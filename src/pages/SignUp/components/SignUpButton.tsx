// LoginButton.tsx
import React from "react";

const SignUpButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <button className="relative inline-block h-20 w-2/4 text-3xl cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]">
        Sign up
      </button>
    </div>
  );
};

export default SignUpButton;
