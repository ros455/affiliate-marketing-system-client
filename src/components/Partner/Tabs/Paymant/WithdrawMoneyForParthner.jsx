import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import ModalWithdrawMoney from "./ModalWithdrawMoney";
const WithdrawMoneyForParthner = ({
  img,
  title,
  sum,
  className,
  user,
  setReloadData,
}) => {
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);


  return (
    <div className="edit_ernings_wraper">
      <div className="ernings_wraper">
        <div className="ernings_wraper-item admin_panel_items">
          <img src={img} alt="" />
          <div className="ernings_wraper-content">
            <h5 className="content_title">{title}</h5>
            <p className={`curent_sum ${className}`}>{sum}$</p>
          </div>
        </div>
      </div>
      <div>
          <div className="ernings_withdraw_money_wrap">
            <p onClick={() => setIsOpenModalConfirm(!isOpenModalConfirm)}>Withdraw balance:</p>
            <FaWallet
              className="ernings_withdraw_money_icon"
              onClick={() => setIsOpenModalConfirm(!isOpenModalConfirm)}
            />
          </div>
          <div>
            {isOpenModalConfirm &&
            <ModalWithdrawMoney
              isOpenModal={isOpenModalConfirm}
              setIsOpen={setIsOpenModalConfirm}
              setReloadData={setReloadData}
            />
            }
          </div>
      </div>
    </div>
  );
};

export default WithdrawMoneyForParthner;
