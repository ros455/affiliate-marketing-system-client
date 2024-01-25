import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../store/auth";
import { apiInstance } from "../../http/Api";
import InputPassword from "../template/InputPassword";
import ConfirmModal from "../template/ConfirmModal";
import { RiMessage2Fill } from "react-icons/ri";
import SendEmailModal from "../template/SendEmailModal";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isOpenModalSendEmail, setIsOpenModalSendEmail] = useState(false);
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);
  const [isDisabledUserModal, setIsDisabledUserModal] = useState(false);
  const [isResetPasswordModal, setIsResetPasswordModal] = useState(false);
  const [isDisabledUserText, setIsDisabledUserText] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

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
    }else {
      if(data.payload.message == 'User disabled') {
        setIsDisabledUserText(true);
      } else if (data.payload.message == 'Email wrong') {
        setErrorEmail(true)
        setErrorPassword(false)
      } else if (data.payload.message == 'Password wrong') {
        setErrorPassword(true)
        setErrorEmail(false)
      } else {
        setErrorEmail(false)
        setErrorPassword(false)
      }
    }
  };

  const handleSendEmail = (email) => {
    apiInstance.post('activation-for-email', {email})
    .then(() => {
      alert("Please check your email to activate your account. Don't forget to look in your spam folder if you can't find our email.")
    })
    .catch((error) => {
      console.log('error',error);
    })
  }

  const handleSendEmailResetPassword = (email) => {
    apiInstance.post('send-reset-password-to-email', {email})
    .catch((error) => {
      console.log('error',error);
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsOpenModalConfirm(!isOpenModalConfirm);
    }
  };
  return (
    <>
    {isDisabledUserModal &&
    <SendEmailModal
    isOpenModal={isDisabledUserModal}
    setIsOpen={setIsDisabledUserModal}
    handleChangeFunc={handleSendEmail}/>
    }
    {isResetPasswordModal &&
    <SendEmailModal
    isOpenModal={isResetPasswordModal}
    setIsOpen={setIsResetPasswordModal}
    handleChangeFunc={handleSendEmailResetPassword}/>
    }
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
          {errorEmail && <p style={{color:'red'}}>Wrong email</p>}
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
          {errorPassword && <p style={{color:'red'}}>Wrong password</p>}
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
          <div>
            {errorPassword &&
                    <div className="registration_button_wrap">
                    <button
                      className="button_approve"
                      onClick={() => setIsResetPasswordModal(!isResetPasswordModal)}
                    >
                      Reset password
                    </button>{" "}
                  </div>
            }
          </div>
          {isDisabledUserText 
          &&
          <div>
          <p>Confirmation by mail is required.</p>
          <div className="send_message_wrap">
          <p className='send_message' onClick={() => setIsDisabledUserModal(!isDisabledUserModal)}>Send a message to confirm now</p>
          <RiMessage2Fill />
          </div>
          </div>
          }
        </div>
      </div>
      <ConfirmModal
        title={"Are you 18 years old?"}
        isOpenModal={isOpenModalConfirm}
        setIsOpen={setIsOpenModalConfirm}
        handleChangeFunc={handleLogin}
      />
    </div>
    </>
  );
};

export default LoginForm;
