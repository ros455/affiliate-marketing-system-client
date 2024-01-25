import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import HistoryTransactionsItem from "./HistoryTransactionsItem";
import HistoryTransactionsItemMobile from "./HistoryTransactionsItemMobile";
import DashboardHeader from "../../../template/DashboardHeader";
import { currentUser } from "../../../../store/auth";
import { useSelector } from "react-redux";
import { apiInstance } from "../../../../http/Api";

const HistoryTransactions = ({reloadData, setReloadData}) => {
  const [allRequest, setAllRequest] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCurrentPage, setVisibleCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [toggleItem, setToggleItem] = useState(true);

  const user = useSelector(currentUser);

  useEffect(() => {
    const fetchData = async () => {
      if (currentPage < 1) return;
      try {
        const response = await apiInstance.get(`/get-all-paymant-request-for-user`, {
          params: { page: currentPage, limit: 5, userId: user._id},
        });
        if (response.data.length) {
          const initialUserRewardValues = {};
          response.data.forEach((user) => {
            initialUserRewardValues[user._id] = "0"; // Додати початкове значення rewardValue для кожного користувача
          });
          setAllRequest(response.data);
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
  }, [currentPage, searchTerm, reloadData]);

  // if(!allRequest.length) {
  //   return (
  //     <Loader/>
  //   )
  // }
  return (
    <>
      <div className="admin_panel_items derection_wraper">
        <DashboardHeader
          title="Transactions history"
          setToggleItem={setToggleItem}
          toggleItem={toggleItem}
        />
        <div className="derection_table_wrapp_xl">
          <div className="derection_table_wrap">
            <div className="table_header">
              <p className="colum colum_name">Name</p>
              <p className="colum ">Sum</p>
              <p className="colum ">Method</p>
              <p className="colum ">Status</p>
              <p className="colum ">Date</p>
            </div>
            <div className="table_body">
              {!!allRequest.length &&
                allRequest.map((request) => (
                  <HistoryTransactionsItem key={request._id} 
                  request={request} 
                  />
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
              <ul className="partner_table_list">
                {!!allRequest.length &&
                allRequest.map((request) => (
                  <HistoryTransactionsItemMobile 
                  key={request._id} 
                  request={request} 
                  />
                ))}
            </ul>
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

export default HistoryTransactions;
