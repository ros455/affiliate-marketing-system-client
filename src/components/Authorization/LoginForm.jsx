import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, currentUser } from '../../store/auth';
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        const data = await dispatch(fetchAuth({
            email,
            password: password
          }));

          console.log('data',data);
      
          if (data.payload.message === 'User disabled') {
            alert('Вас заблоковано, зверніться до менеджера');
          }
      
          if (data.payload.message === 'User not found' || data.payload.message === 'Password not found') {
            alert('Невірний логін чи пароль');
          }
      
          if ('token' in data.payload) {
            window.localStorage.setItem('A-M-S-token', data.payload.token);
            // navigate('/');
            // window.location.reload();
          }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleLogin();
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
              onClick={() => handleLogin(email, password)}
            >
              Sign in
            </button>{" "}
          </div>
          <div className="not_regist">
            <p onClick={() => handleLogin(email, password)}>
              Not registered yet?{" "}
              <Link to={"/registration"}>
                {" "}
                <span>Create an Account </span>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    );
};

export default LoginForm;