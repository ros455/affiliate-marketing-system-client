import React, {useState} from 'react';

const SendEmailModal = ({isOpenModal, setIsOpen, handleChangeFunc}) => {
  const [email, setEmail] = useState('');

    const handleAprove = () => {
        try {
          alert("We have sent a message to your email. Please check your email .Don't forget to look in your spam folder if you can't find our email.")
            setIsOpen(!setIsOpen)
            handleChangeFunc(email);

        } catch(error) {
           console.log(error); 
        }
    }
    return (
      <>
        {isOpenModal && (
          <div className="sendEmail_modal_wrap">
            <div className="sendEmail_item_body">
              <h4>Write your email</h4>
              <div className="sendEmail_container">
                <div className='sendEmail_input_block'>
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
            />
          </div>
                </div>
                <div className='sendEmail_buttons_wrap'>
                <div className="sendEmail_button_blcok">
                  <button 
                  className="button_approve"
                  onClick={handleAprove}>Send</button>{" "}
                </div>
                <div className="sendEmail_button_blcok">
                  <button 
                  className="button_approve"
                  onClick={() => setIsOpen(!setIsOpen)}>Cancel</button>{" "}
                </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default SendEmailModal;