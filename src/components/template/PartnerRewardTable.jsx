import { useState } from "react";
import RewardInputEdit from "./RewardInputEdit";
import { TbEdit } from "react-icons/tb";
const PartnerRewardTable = ({
  partner,
  rewards,
  handlerActiveUser,
  editId,
  inputRef,
  userRewardValues,
  handleChangeValues,
  handleEnterKey,
  handleUpdateAndSubmit,
  setEditId,
}) => {
  const [isOpenEditor,setIsOpenEditor] = useState(false);
  return (
    <ul className="partner_table_list">
      {partner.length > 0 &&
        partner.map((user) => (
          <li
            onClick={handlerActiveUser ? () => handlerActiveUser(user) : null}
            className="partner_table_item"
            key={user._id}
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
            <TbEdit className="reward_btn_edit_icon" />
            {isOpenEditor
            ?
            <input/>
            :
              <div className="partner_table_block">
                <p className="partner_table_text">Rewards</p>
                <p className="partner_table_value">{user?.bonus}</p>
              </div>
            }
          </li>
        ))}
    </ul>
  );
};

export default PartnerRewardTable;

                {/* <RewardInputEdit
                  editId={editId}
                  user={user}
                  inputRef={inputRef}
                  userRewardValues={userRewardValues}
                  handleChangeValues={handleChangeValues}
                  handleEnterKey={handleEnterKey}
                  handleUpdateAndSubmit={handleUpdateAndSubmit}
                  setEditId={setEditId}
                /> */}