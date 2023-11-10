import React, { useEffect, useState } from 'react';
import { TbEdit } from "react-icons/tb";
const RewardListPartnerItem = ({user, handleUpdateuserReward, isOpenEditor, setIsOpenEditor}) => {
    const [stateReward, setStateReward] = useState('');

    useEffect(() => {
        setStateReward(user?.bonus)
    },[user])


    const handleUpdateData = () => {
        handleUpdateuserReward(user?._id, stateReward)
    }

    return (
        <div className="table_info_item">
        <p className="colum row colum_name">{user.name}</p>
        <p className="colum row colum_progres">{user?.statistics?.conversionAllPeriod}</p>
        <p className="colum row colum_quantity">{user?.statistics?.clicksAllPeriod}</p>
        <p className="colum row colum_data">{user?.statistics?.buysAllPeriod}</p>
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
      </div>
    );
};

export default RewardListPartnerItem;