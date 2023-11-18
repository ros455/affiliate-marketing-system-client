import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { statisticAdmin } from "../../store/auth";
import Ernings from "../template/Ernings";
import ErningsAndEdit from "../template/ErningsAndEdit";
import StatisticChart from "../template/StatisticChart";
import DashboardButton from "../template/DashboardButton";
import { BASE_URL } from "../../http/BaseUrl";
import { AUTH_TOKEN } from "../../utils/Token";
import Loader from "../template/Loader";


const UserOne = ({ setActiveUser, currentUser }) => {
  // const statistic = useSelector(statisticAdmin);
  const [isActiveButton, setIsActiveButton] = useState("sales_month");
  const [reloadData, setReloadData] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/get-user-statistic/${currentUser._id}`, {
      headers: { authorization: AUTH_TOKEN }
    }).then((res) => {
      if(res.data) {
        setUser(res.data)
      }
    }).catch((error) => {
      console.log('error',error);
    })
  },[reloadData])

  const handleActiveButton = (activeButton) => {
    setIsActiveButton(activeButton);
  };
  const renderErnings = () => {
    if (isActiveButton === "sales_month") {
      return (
        <Ernings
          img="./image/icon1.svg"
          sum={`${user?.statistics?.buysMonth}`}
          title="Number of sales per month"
        />
      );
    }
    if (isActiveButton === "sales_amount_month") {
      return (
        <Ernings
          img="./image/icon4.svg"
          sum={`${user?.statistics?.buysSumMonth || 0}$`}
          title="Amount of sales per month"
        />
      );
    }
    if (isActiveButton === "transition_month") {
      return (
        <Ernings
          img="./image/icon2.svg"
          sum={user?.statistics?.clicksMonth}
          title="Transitions per month"
        />
      );
    }
    if (isActiveButton === "general_transitions") {
      return (
        <Ernings
          img="./image/icon3.svg"
          sum={`${user?.statistics?.clicksAllPeriod}`}
          title="Transitions for the entire period"
        />
      );
    }
    if (isActiveButton === "total_sales") {
      return (
        <Ernings
          img="./image/icon1.svg"
          sum={`${user?.statistics?.buysAllPeriod}`}
          title="Number of sales for all time"
        />
      );
    }
    if (isActiveButton === "total_amount_sales") {
      return (
        <Ernings
          img="./image/icon4.svg"
          sum={`${user?.statistics?.buysSumAllPeriod || 0}$`}
          title="Amount of sales for all time"
        />
      );
    }
    if (isActiveButton === "balance_reward") {
      return (
        <ErningsAndEdit 
        img="./image/icon5.svg"
        sum={`${user?.balance.toFixed(1)}`}
        title="Balance"
        user={user}
        setReloadData={setReloadData}/>
      );
    }
    if (isActiveButton === "conversions") {
      return <Ernings img="./image/icon6.svg" sum={`${user?.statistics?.conversionAllPeriod}%`} title="Conversions" />;
    }
  };
  if(!user) {
    return  (
      <Loader/>
    );
  }
  return (
    <>
      <p className="user_one_text">Pages / Partners / UserOne</p>
      <div className="user_one_title_wrapp">
        <h2 className="user_one_title">{user?.name}</h2>
        <button
          type="button"
          className="user_one_btn_back"
          onClick={() => setActiveUser(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M42.75 15.75V29.25C42.75 31.7318 40.734 33.75 38.25 33.75H6.75V27H36V18H11.25V22.5L2.25 14.625L11.25 6.75V11.25H38.25C39.4435 11.25 40.5881 11.7241 41.432 12.568C42.2759 13.4119 42.75 14.5565 42.75 15.75Z"
              fill="#2B3674"
            />
          </svg>
        </button>
      </div>
      <div className="user_one_erning_sales_info_wrap">
        <Ernings
          img="./image/icon1.svg"
          sum={`${user?.statistics?.buysMonth}`}
          title="Number of sales per month"
        />
        <Ernings
          img="./image/icon4.svg"
          sum={`${user?.statistics?.buysSumMonth || 0}$`}
          title="Amount of sales per month"
        />
        <Ernings
          img="./image/icon2.svg"
          sum={user?.statistics?.clicksMonth}
          title="Transitions per month"
        />
        <Ernings
          img="./image/icon3.svg"
          sum={`${user?.statistics?.clicksAllPeriod}`}
          title="Transitions for the entire period"
        />

        <Ernings
          img="./image/icon1.svg"
          sum={`${user?.statistics?.buysAllPeriod}`}
          title="Number of sales for all time"
        />
        <Ernings
          img="./image/icon4.svg"
          sum={`${user?.statistics?.buysSumAllPeriod || 0}$`}
          title="Amount of sales for all time"
        />
        <ErningsAndEdit
          img="./image/icon5.svg"
          sum={`${user?.balance.toFixed(1)}`}
          title="Balance"
          user={user}
          setReloadData={setReloadData}
        />
        <Ernings
          img="./image/icon6.svg"
          sum={`${user?.statistics?.conversionAllPeriod}%`}
          title="Conversions"
        />
      </div>
      <div className="user_one_block_wrapp">
        <DashboardButton
          handleActiveButton={handleActiveButton}
          isActiveButton={isActiveButton}
          balanceReward={true}
          conversions={true}
        />
        <div className="partner_dasboard_render_ernings_element">
          {renderErnings()}
        </div>
        <StatisticChart
          chartsMonth={user?.statistics?.chartsMonth}
          chartsYear={user?.statistics?.chartsYear}
          chartsYearAllPeriod={user?.statistics?.chartsYearAllPeriod}
        />
      </div>
    </>
  );
};

export default UserOne;
