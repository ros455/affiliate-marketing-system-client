import React, {useState, useEffect} from "react";
import InputPassword from "../template/InputPassword";
import { apiInstance } from "../../http/Api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SetNewPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordSecond, setPasswordSecond] = useState("");
    const { id } = useParams();
    const navugate = useNavigate();

    useEffect(() => {
      apiInstance.get(`/checked-password-recovery/${id}`)
      .then((res) => {
        if(res.data.value) {
          navugate('/')
        }
      })
    },[id])

    const handleSetNewPasswordClickEnter = (e) => {
      if(e.key === "Enter") {
        handleSetNewPassword();
      }
    }

      const handleSetNewPassword = () => {
        if(password!== '' && password == passwordSecond) {
            apiInstance.post(`/set-new-password`, {
                password,
                id
            }).then(() => {
                alert('Password changed successfully. Try logging into your account')
                navugate('/')
            }).catch((error) => {
                console.log('error');
            })
        }else {
            alert('Passwords do not match')
        }
      }
  return (
    <div className="registration_wrap">
        <div className="registration_block">
      <div className="input_wraper-item">
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <InputPassword
          password={password}
          setPassword={setPassword}
          handleKeyDown={handleSetNewPasswordClickEnter}
        />
      </div>
      <div className="input_wraper-item">
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <InputPassword
          password={passwordSecond}
          setPassword={setPasswordSecond}
          handleKeyDown={handleSetNewPasswordClickEnter}
        />
      </div>
      <div className="registration_button_wrap">
          <button
            className="button_approve"
            onClick={handleSetNewPassword}
          >
            Set new password
          </button>{" "}
        </div>
        </div>
    </div>
  );
};

export default SetNewPassword;
