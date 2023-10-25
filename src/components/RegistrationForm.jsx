import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/LoginForm.scss";
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleRegistration = () => {};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRegistration();
    }
  };

  return (
    <div className="registration_wrap">
      <div className="registration_block">
        <div className="input_wraper">
          <div className="input_wraper-item">
            <label htmlFor="mail">
              Email <span>*</span>
            </label>
            <input
              id="mail"
              type="text"
              placeholder="mail@simmmple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="input_wraper-item">
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className="registration_button_wrap">
          <button
            className="button_singin"
            onClick={() => handleRegistration(email, password)}
          >
            Registration
          </button>{" "}
        </div>
        <div className="not_regist">
          <p onClick={() => handleRegistration(email, password)}>
            Not registered yet?{" "}
            <Link to={"/Login"}>
              {" "}
              <span>Create an Account </span>{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
