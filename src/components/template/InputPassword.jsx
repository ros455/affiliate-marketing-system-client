import React, {useState} from 'react';
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri';
const InputPassword = ({password, setPassword, handleKeyDown}) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    return (
        <div className="password_input_container">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          placeholder="Min. 8 characters"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
  <div className="password_toggle_icon" onClick={toggleShowPassword}>
    {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
  </div>
        </div>
    );
};

export default InputPassword;