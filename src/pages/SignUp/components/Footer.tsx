// Footer.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer flex justify-center text-sm text-gray-600 pb-40">
      <p className="text-4xl">
        Already a member?{" "}
        <NavLink
          to="/signin"
          className="signup-link cursor-pointer ml-2"
          style={{ fontWeight: 700 }}
        >
          Sign in
        </NavLink>
      </p>
    </div>
  );
};

export default Footer;
