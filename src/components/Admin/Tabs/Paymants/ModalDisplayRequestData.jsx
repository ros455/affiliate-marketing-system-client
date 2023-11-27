import { useState, useEffect } from "react";
import { BASE_URL } from "../../../../http/BaseUrl";
import axios from "axios";
const ModalDisplayRequestData = ({
  isOpenModal,
  setIsOpen,
  user,
  sum,
  method,
  comment,
  date,
  wallet,
  requestId,
  setReloadData
}) => {

    const aproveRequest = () => {
        axios.patch(`${BASE_URL}/aprove-request`, {
          sum,
          userId: user._id,
          requestId: requestId
        }).then(() => {
            alert('The operation is successful')
            setIsOpen(!isOpenModal)
            setReloadData((state) => !state)
        }).catch((error) => {
            console.log(error);
        })
    }

    const cancelledRequest = () => {
        axios.patch(`${BASE_URL}/cancelled-request`, {
          requestId: requestId
        }).then(() => {
            alert('The operation is cancelled')
            setIsOpen(!isOpenModal)
            setReloadData((state) => !state)
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <>
      {isOpenModal && (
        <div className="confirm_modal_wrap">
          <div className="withdraw_money_item_body">
            <div className="withdraw_money_close_wrap">
              <p
                className="withdraw_money_close_text"
                onClick={() => setIsOpen(!isOpenModal)}
              >
                X
              </p>
            </div>
            <div className="display_request_modal_block">
              <div className="display_request_modal_item_block">
                <p className="display_request_modal_title">Name</p>
                <p className="display_request_modal_text">{user?.name}</p>
              </div>
              <div className="display_request_modal_item_block">
                <p className="display_request_modal_title">Sum</p>
                <p className="display_request_modal_text">{sum}</p>
              </div>
              <div className="display_request_modal_item_block">
                <p className="display_request_modal_title">Method</p>
                <p className="display_request_modal_text">{method}</p>
              </div>
              <div className="display_request_modal_item_block">
                <p className="display_request_modal_title">Wallet</p>
                <p className="display_request_modal_text">{wallet}</p>
              </div>
              <div className="display_request_modal_item_block">
                <p className="display_request_modal_title">Comment</p>
                <p className="display_request_modal_text">{comment}</p>
              </div>
              <div className="display_request_modal_item_block">
                <p className="display_request_modal_title">Date</p>
                <p className="display_request_modal_text">{date}</p>
              </div>
              <div className="display_request_modal_buttons_wrap">
                <div className="display_request_modal_button_block">
                  <button className="display_request_modal_button_not_aprove" 
                  onClick={cancelledRequest}>
                    Cancelled
                  </button>
                </div>
                <div className="display_request_modal_button_block">
                  <button className="display_request_modal_button_aprove"
                  onClick={aproveRequest}>
                    Aprove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDisplayRequestData;
