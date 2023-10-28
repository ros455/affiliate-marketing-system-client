import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from "../../store/auth";
import InputPassword from "../template/InputPassword";
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegistration = async () => {
    const data = await dispatch(fetchRegister({
      email,
      name,
      password: password
    }));

    console.log('data',data);

    // if (data.payload.message === 'Email already exists') {
    //   return alert('Email already exists');
    // }

    if ('token' in data.payload) {
      window.localStorage.setItem('A-M-S-token', data.payload.token);
      navigate('/partner-panel');
      window.location.reload();
    } else {
      alert(data.payload.message);
    }
  };

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
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="mail@simmmple.com"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="input_wraper-item">
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            {/* <input
              id="password"
              type="password"
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            /> */}
            <InputPassword password={password} setPassword={setPassword} handleKeyDown={handleKeyDown}/>
          </div>
        </div>
        <div className="registration_button_wrap">
          <button
            className="button_approve"
            onClick={() => handleRegistration(email, password)}
          >
            Registration
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
