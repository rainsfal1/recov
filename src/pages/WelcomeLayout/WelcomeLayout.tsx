import "./welcomelayout.css";

import Icon from "./components/Icon";
import LoginMessage from "./components/LoginMessage";
import SignIn from "./components/SignIn";
import SignUpMessage from "./components/SignUpMessage.tsx";
import { NavLink } from "react-router-dom";

export default function WelcomeLayout() {
  return (
    <div className="screen-content-wrapper">
      <div className="content-wrapper-inner">
        <Icon />
        <LoginMessage />
        <br />
        <NavLink to="/signin">
          <SignIn />
        </NavLink>
        <br />
        <NavLink to="/signup">
          <SignUpMessage />
        </NavLink>
      </div>
    </div>
  );
}
