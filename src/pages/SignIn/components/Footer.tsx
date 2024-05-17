// Footer.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer flex justify-center text-sm text-gray-600 pb-40">
      <p className="text-4xl">
        Not a member?{" "}
        <NavLink
          to="/signup"
          className="signup-link cursor-pointer ml-2"
          style={{ fontWeight: 700 }}
        >
          Sign up now
        </NavLink>
      </p>
    </div>
  );
};

export default Footer;
