import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { AUTH_TOKEN } from "../../utils/Token";
import { BASE_URL } from "../../http/BaseUrl";
import { TbEdit } from "react-icons/tb";
import RewardInputEdit from "../template/RewardInputEdit";

import PartnerRewardTable from "../template/PartnerRewardTable";
import DashboardHeader from "../template/DashboardHeader";

const RewardListPartner = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCurrentPage, setVisibleCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const [editId, setEditId] = useState(null);

  const [userRewardValues, setUserRewardValues] = useState({});
  const [toggleItem, setToggleItem] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/search-users`, {
          params: { page: currentPage, limit: 2, search: searchTerm },
          headers: { authorization: AUTH_TOKEN },
        });
        if (response.data.length) {
          const initialUserRewardValues = {};
          response.data.forEach((user) => {
            initialUserRewardValues[user._id] = "0"; // Додати початкове значення rewardValue для кожного користувача
          });
          setUserRewardValues(initialUserRewardValues);
          setAllUsers(response.data);
          setVisibleCurrentPage(currentPage);
        } else {
          const lastPage = currentPage - 1;
          setCurrentPage(lastPage);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500); // Debounce the API call by 500ms

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentPage, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to the first page on search
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      setEditId(null);
    }
  };

  const handleUpdateAndSubmit = (userId) => {
    setEditId(null);
  };

  const handleChangeValues = (userId, newValue) => {
    const updatedRewardValues = { ...userRewardValues };
    updatedRewardValues[userId] = newValue;
    setUserRewardValues(updatedRewardValues);
  };

  return (
    <>
      <div className="admin_panel_items derection_wraper">
        {/* <div className="dashboard_list_header">
        <h3 className="dashboard_list_title">Partner</h3>
        <div className="dashboard_input_wrap">
          <input
            onChange={(e) => handleSearchChange(e)}
            placeholder="Search partner"
          />
        </div>
      </div> */}
        <DashboardHeader
          title="Partner"
          setToggleItem={setToggleItem}
          toggleItem={toggleItem}
        />
        {/* <div className="dashboard_input_wrap">
          <input
            onChange={(e) => handleSearchChange(e)}
            placeholder="Search partner"
          />
        </div> */}
        <div className="derection_table_wrapp_xl">
          <div className="dashboard_input_wrap">
            <input
              onChange={(e) => handleSearchChange(e)}
              placeholder="Search partner"
            />
          </div>
          <div className="derection_table_wrap">
            <div className="table_header">
              <p className="colum colum_name">Name</p>
              <p className="colum ">Conversion</p>
              <p className="colum ">Transitions</p>
              <p className="colum ">Sales</p>
              <p className="colum ">Reward %</p>
            </div>
            <div className="table_body">
              {!!allUsers.length &&
                allUsers.map((user) => (
                  <div className="table_info_item" key={user._id}>
                    <p className="colum row colum_name">{user.name}</p>
                    <p className="colum row colum_progres">2</p>
                    <p className="colum row colum_quantity">3</p>
                    <p className="colum row colum_data">4</p>
                    <RewardInputEdit
                      user={user}
                      editId={editId}
                      inputRef={inputRef}
                      userRewardValues={userRewardValues}
                      handleChangeValues={handleChangeValues}
                      handleEnterKey={handleEnterKey}
                      handleUpdateAndSubmit={handleUpdateAndSubmit}
                      setEditId={setEditId}
                    />
                    {/* {editId === user._id ? (
                      <div className="reward_input_edit_wrapp">
                        <input
                          ref={inputRef}
                          className="reward_input_edit"
                          value={userRewardValues[user._id]}
                          type="text"
                          onChange={(e) =>
                            handleChangeValues(user._id, e.target.value)
                          }
                          onKeyDown={(e) => handleEnterKey(e, user._id)}
                          placeholder={`2%`}
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
                    )} */}
                  </div>
                ))}
            </div>
          </div>
          <div className="dashboard_pagination_wrap">
            <div className="dashboard_pagination_block">
              <div className="dashboard_pagination_buttons_block">
                <button
                  disabled={currentPage == 1 ? true : false}
                  onClick={() => setCurrentPage((state) => (state -= 1))}
                  className="dashboard_pagination_button_item"
                >
                  <AiOutlineLeft /> Prev
                </button>
                <p className="pagination_current_page">{visibleCurrentPage}</p>
                <button
                  onClick={() => setCurrentPage((state) => (state += 1))}
                  className="dashboard_pagination_button_item"
                >
                  Next <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {toggleItem && (
          <div className="list_partner_hidden">
            <div className="dashboard_input_wrap">
              <input
                onChange={(e) => handleSearchChange(e)}
                placeholder="Search partner"
              />
            </div>
            <PartnerRewardTable
              partner={allUsers}
              rewards={true}
              editId={editId}
              inputRef={inputRef}
              userRewardValues={userRewardValues}
              handleChangeValues={handleChangeValues}
              handleEnterKey={handleEnterKey}
              handleUpdateAndSubmit={handleUpdateAndSubmit}
              setEditId={setEditId}

              // handlerActiveUser={handlerActiveUser}
            />
            <div className="dashboard_pagination_wrap">
              <div className="dashboard_pagination_block">
                <div className="dashboard_pagination_buttons_block">
                  <button
                    disabled={currentPage == 1 ? true : false}
                    onClick={() => setCurrentPage((state) => (state -= 1))}
                    className="dashboard_pagination_button_item"
                  >
                    <AiOutlineLeft /> Prev
                  </button>
                  <p className="pagination_current_page">
                    {visibleCurrentPage}
                  </p>
                  <button
                    onClick={() => setCurrentPage((state) => (state += 1))}
                    className="dashboard_pagination_button_item"
                  >
                    Next <AiOutlineRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* {toggleItem && <PartnerTable partner={allUsers} rewards={true} />} */}
      </div>
    </>
  );
};

export default RewardListPartner;
