import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { currentUser } from '../../store/auth';
import InputPassword from './InputPassword';
import { apiInstance } from '../../http/Api';
const EditUserProfileData = ({updateDataUrl}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(currentUser);

    useEffect(() => {
        setEmail(user.email)
        setName(user.name)
    },[user])

    const handleUpdateData = async () => {
      try {
        const response = await apiInstance.patch(`/${updateDataUrl}`,{
          email,
          name,
          id: user._id,
          password
      })

      if(response.status == 200) {
        alert('User data updated')
      } 

      } catch(error) {
        console.log('error',error);
        if(error.response.data.message == 'Email already exists') {
          alert('Email already exists')
        }
      }
    }


    return (
        <div className='change_data_wrap'>
            <div className="input_wraper-item">
              <label htmlFor="mail">
                Email
              </label>
              <input
                id="mail"
                type="text"
                placeholder="mail@simmmple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_wraper-item">
              <label htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input_wraper-item">
              <label htmlFor="password">
                Password
              </label>
              <InputPassword password={password} setPassword={setPassword}/>
            </div>
            <div className="registration_button_wrap">
                <button
                className="button_approve"
                onClick={handleUpdateData}
                >Change data</button>
            </div>
        </div>
    );
};

export default EditUserProfileData;