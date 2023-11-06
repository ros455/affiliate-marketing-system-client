import { TbEdit } from "react-icons/tb";

const RewardInputEdit = ({
  editId,
  user,
  inputRef,
  userRewardValues,
  handleChangeValues,
  handleEnterKey,
  handleUpdateAndSubmit,
  setEditId,
}) => {
  return (
    <>
      {editId === user._id ? (
        <div className="reward_input_edit_wrapp">
          <input
            ref={inputRef}
            className="reward_input_edit"
            value={userRewardValues[user._id]}
            type="text"
            onChange={(e) => handleChangeValues(user._id, e.target.value)}
            onKeyDown={(e) => handleEnterKey(e, user._id)}
            placeholder={`2%`}
            onBlur={() => setEditId(null)}
          />
          <button
            className="reward_btn_edit_submit"
            type="submit"
            onClick={() => handleUpdateAndSubmit(user._id)}
          >
            ok
          </button>
        </div>
      ) : (
        <div className="colum row colum_reward reward_table_btn_wrapp">
          <p>{userRewardValues[user._id]}</p>
          <button
            className="reward_btn_edit"
            type="button"
            onClick={() => setEditId(user._id)}
          >
            <TbEdit className="reward_btn_edit_icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default RewardInputEdit;
