import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { AUTH_TOKEN } from "../../utils/Token";
import { BASE_URL } from "../../http/BaseUrl";
import RewardListPartnerItem from "./RewardListPartnerItem";
import RewardListPartnerItemMobile from "./RewardListPartnerItemMobile";
import DashboardHeader from "../template/DashboardHeader";

const RewardListPartner = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCurrentPage, setVisibleCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const [toggleItem, setToggleItem] = useState(true);


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

  const handleUpdateuserReward = (id, newBonus) => {
    console.log('updated reward');
    axios.patch(`${BASE_URL}/update-user-bonus`, {
      id,
      newBonus
    })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.log('error',error);
    })
  }

  console.log('allUsers2',allUsers);
  return (
    <>
      <div className="admin_panel_items derection_wraper">
        <DashboardHeader
          title="Partner"
          setToggleItem={setToggleItem}
          toggleItem={toggleItem}
        />
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
                  <RewardListPartnerItem key={user._id} user={user} handleUpdateuserReward={handleUpdateuserReward}/>
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
            {!!allUsers.length &&
                allUsers.map((user) => (
                  <RewardListPartnerItemMobile key={user._id} user={user} handleUpdateuserReward={handleUpdateuserReward}/>
            ))}
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
      </div>
    </>
  );
};

export default RewardListPartner;

                    {/* <RewardInputEdit
                      user={user}
                      editId={editId}
                      inputRef={inputRefXl}
                      userRewardValues={userRewardValues}
                      handleChangeValues={handleChangeValues}
                      handleEnterKey={handleEnterKey}
                      handleUpdateAndSubmit={handleUpdateAndSubmit}
                      setEditId={setEditId}
                    /> */}
