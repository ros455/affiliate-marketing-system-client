import React from 'react';

const ConfirmModal = ({isOpenModal, setIsOpen, title, handleChangeFunc}) => {

    const handleAprove = () => {
        try {
            setIsOpen(!setIsOpen)
            handleChangeFunc();
        } catch(error) {
           console.log(error); 
        }
    }
    return (
      <>
        {isOpenModal && (
          <div className="confirm_modal_wrap">
            <div className="confirm_item_body">
              <h4>{title}</h4>
              <div className="confirm_button_wrap">
                <div className="confirm_button_blcok">
                  <button 
                  className="button_approve"
                  onClick={handleAprove}>Yes</button>{" "}
                </div>
                <div className="confirm_button_blcok">
                  <button 
                  className="button_approve"
                  onClick={() => setIsOpen(!setIsOpen)}>No</button>{" "}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default ConfirmModal;