import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { AUTH_TOKEN } from "../../utils/Token";
import { BASE_URL } from "../../http/BaseUrl";
import UserOne from "../Admin/UserOne";
const ListOfPartner_List = () => {
  const [partnerName, setPartnerName] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCurrentPage, setVisibleCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [activeUser, setActiveUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/search-users`, {
          params: { page: currentPage, limit: 2, search: searchTerm },
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
  console.log("allUsers", allUsers);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to the first page on search
  };

  const handlerActiveUser = (user) => {
    setActiveUser(true);
    setCurrentUser(user);
  };

  return activeUser ? (
    <UserOne setActiveUser={setActiveUser} currentUser={currentUser} />
  ) : (
    <div className="admin_panel_items derection_wraper">
      <div className="dashboard_list_header">
        <h3 className="dashboard_list_title">Partner</h3>
        <div className="dashboard_input_wrap">
          <input
            onChange={(e) => handleSearchChange(e)}
            placeholder="Search partner"
          />
        </div>
      </div>
      <div className="derection_table_wrap">
        <div className="table_header">
          <p className="colum colum_name">Name</p>
          <p className="colum ">Conversion</p>
          <p className="colum ">Transitions</p>
          <p className="colum ">Sales</p>
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
                <p className="colum row colum_progres">2</p>
                <p className="colum row colum_quantity">3</p>
                <p className="colum row colum_data">4</p>
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
  );
};

export default ListOfPartner_List;
