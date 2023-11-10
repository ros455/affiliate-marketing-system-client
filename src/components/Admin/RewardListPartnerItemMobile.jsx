import React, { useState, useEffect } from 'react';
import { TbEdit } from "react-icons/tb";
const RewardListPartnerItemMobile = ({user, handleUpdateuserReward, isOpenEditor, setIsOpenEditor}) => {
    const [stateReward, setStateReward] = useState('');

    useEffect(() => {
        setStateReward(user?.bonus)
    },[user])

    const handleUpdateData = () => {
        handleUpdateuserReward(user?._id, stateReward)
    }

    return (
      <ul className="partner_table_list">
            <li
              className="partner_table_item"
            >
              <div className="partner_table_block">
                <p className="partner_table_text">Name</p>
                <p className="partner_table_value">{user.name}</p>
              </div>
              <div className="partner_table_block">
                <p className="partner_table_text">Email</p>
                <p className="partner_table_value">{user.email}</p>
              </div>
              <div className="partner_table_block">
                <p className="partner_table_text">Transitions</p>
                <p className="partner_table_value">{user?.statistics?.clicksAllPeriod}</p>
              </div>
              <div className="partner_table_block">
                <p className="partner_table_text">Sales</p>
                <p className="partner_table_value">{user?.statistics?.buysAllPeriod}</p>
              </div>
              <div>
              {isOpenEditor
              ?
              <div className="reward_input_edit_wrapp">
                <input
                className="reward_input_edit"
                value={stateReward}
                onChange={(e) => setStateReward(e.target.value)}
                type="text"
              />
              <button
                className="reward_btn_close_submit"
                type="submit"
                onClick={() => setIsOpenEditor(!isOpenEditor)}
              >
                X
              </button>
              <button
                className="reward_btn_edit_submit"
                type="submit"
                onClick={handleUpdateData}
              >
                ok
              </button>
            </div>
              :
              <>
              <TbEdit className="reward_btn_edit_icon" onClick={() => setIsOpenEditor(user?._id)}/>
              <p className="colum row colum_data">{user?.bonus}</p>
              </>
              }
        </div>
            </li>
      </ul>
    );
};

export default RewardListPartnerItemMobile;