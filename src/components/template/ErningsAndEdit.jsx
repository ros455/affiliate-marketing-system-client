import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "../../http/BaseUrl";
const ErningsAndEdit = ({ img, title, sum, className, isManyText, user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(user?.balance);
  },[user])

  const handelUpdateBalance = () => {
    axios.patch(`${BASE_URL}/update-user-balance`, {
      id: user._id,
      newBalance: value
    }).then(() => {
      setIsEdit(false);
    }).catch((error) => {
      console.log('error',error);
    })
  }

  return (
    <div className="edit_ernings_wraper">
      <div className="ernings_wraper">
        <div className="ernings_wraper-item admin_panel_items">
          <img src={img} alt="" />
          <div className="ernings_wraper-content">
            <h5 className="content_title">{title}</h5>
            {isManyText ? (
              <p
                className={`curent_sum ${className}`}
                style={{ fontSize: "12px" }}
              >
                {sum}
              </p>
            ) : (
              <p className={`curent_sum ${className}`}>{sum}</p>
            )}
          </div>
        </div>
      </div>
      <div>
        {!isEdit
        ?
      <div className='ernings_withdraw_money_wrap'>
        <BiDownload className='ernings_withdraw_money_icon' onClick={() => setIsEdit(!isEdit)}/>
      </div>
        :
      <div className="reward_input_edit_wrapp">
                <input
                className="reward_input_edit"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
              />
              <button
                className="reward_btn_close_submit"
                type="submit"
                onClick={() => setIsEdit(!isEdit)}
              >
                X
              </button>
              <button
                className="reward_btn_edit_submit"
                type="submit"
                onClick={handelUpdateBalance}
              >
                ok
              </button>
            </div>
        }
      </div>
    </div>
  );
};

export default ErningsAndEdit;
