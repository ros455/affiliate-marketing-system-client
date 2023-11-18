import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { AUTH_TOKEN } from "../../utils/Token";
import { BASE_URL } from "../../http/BaseUrl";
import UserOne from "../Admin/UserOne";
import PartnerTable from "../template/PartnerTable";
import DashboardHeader from "../template/DashboardHeader";
import Loader from "./Loader";

const ListOfPartner_List = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCurrentPage, setVisibleCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const [activeUser, setActiveUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [toggleItem, setToggleItem] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/search-users`, {
          params: { page: currentPage, limit: 5, search: searchTerm },
          headers: { authorization: AUTH_TOKEN },
        });
        if (response.data.length) {
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

  const handlerActiveUser = (user) => {
    setActiveUser(true);
    setCurrentUser(user);
  };

  if(!allUsers.length) {
    return (
      <Loader/>
    )
  }

  return activeUser ? (
    <UserOne setActiveUser={setActiveUser} currentUser={currentUser} />
  ) : (
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
              <p className="colum ">Reward</p>
            </div>
            <div className="table_body">
              {!!allUsers.length &&
                allUsers.map((user) => (
                  <div
                    className="table_info_item"
                    key={user._id}
                    onClick={() => handlerActiveUser(user)}
                  >
                    <p className="colum row colum_name">{user.name}</p>
                    <p className="colum row colum_progres">{user?.statistics?.conversionAllPeriod}%</p>
                    <p className="colum row colum_quantity">{user?.statistics?.clicksAllPeriod}</p>
                    <p className="colum row colum_data">{user?.statistics?.buysAllPeriod}</p>
                    <p className="colum row colum_reward">{user?.bonus}%</p>
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
            <PartnerTable
              partner={allUsers}
              rewards={true}
              handlerActiveUser={handlerActiveUser}
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
      </div>
    </>
  );
};

export default ListOfPartner_List;
