import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchRegister } from "../../store/auth";
import InputPassword from "../template/InputPassword";
import ConfirmModal from "../template/ConfirmModal";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegistration = async () => {
    const data = await dispatch(fetchRegister({
      email,
      name,
      password: password
    }));

    if ('token' in data.payload) {
      navigate('/');
      alert("Please check your email to activate your account. Don't forget to look in your spam folder if you can't find our email.")
      window.location.reload();
    } else {
      alert(data.payload.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsOpenModalConfirm(!isOpenModalConfirm);
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
            <InputPassword password={password} setPassword={setPassword} handleKeyDown={handleKeyDown}/>
          </div>
        </div>
        <div className="registration_button_wrap">
          <button
            className="button_approve"
            onClick={() => setIsOpenModalConfirm(!isOpenModalConfirm)}
          >
            Registration
          </button>{" "}
        </div>
        <div className="not_regist">
            <p>
              <Link to={"/"}>
                {" "}
                <span>Back to login</span>{" "}
              </Link>{" "}
            </p>
          </div>
      </div>
      <ConfirmModal
        title={"Are you 18 years old?"}
        isOpenModal={isOpenModalConfirm}
        setIsOpen={setIsOpenModalConfirm}
        handleChangeFunc={handleRegistration}
      />
    </div>
  );
};

export default RegistrationForm;
