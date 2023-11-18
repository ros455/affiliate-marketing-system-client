import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../store/auth";
import InputPassword from "../template/InputPassword";
import ConfirmModal from "../template/ConfirmModal";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const data = await dispatch(
      fetchAuth({
        email,
        password: password,
      })
    );

    if ("token" in data.payload) {
      window.localStorage.setItem("A-M-S-token", data.payload.token);
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
              Login <span>*</span>
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
            <InputPassword
              password={password}
              setPassword={setPassword}
              handleKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className="registration_button_wrap">
          <button
            className="button_approve"
            onClick={() => setIsOpenModalConfirm(!isOpenModalConfirm)}
          >
            Sign in
          </button>{" "}
        </div>
        <div className="not_regist">
          <p>
            Not registered yet?{" "}
            <Link to={"/registration"}>
              {" "}
              <span>Create an Account </span>{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
      <ConfirmModal
        title={"Are you 18 years old?"}
        isOpenModal={isOpenModalConfirm}
        setIsOpen={setIsOpenModalConfirm}
        handleChangeFunc={handleLogin}
      />
    </div>
  );
};

export default LoginForm;
