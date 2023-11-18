import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../../store/auth";
import Ernings from "../template/Ernings";
import WeeklyChart from "../template/WeeklyChart";
import DashboardConversionList from "./DashboardConversionList";
import DashboardButton from "../template/DashboardButton";
import DashboardHeader from "../template/DashboardHeader";
import Loader from "../template/Loader";
const PartnerDashboard = ({ hendlerOpenConversions }) => {
  const user = useSelector(currentUser);

  const [isActiveButton, setIsActiveButton] = useState("sales_month");
  const [toggleItem, setToggleItem] = useState(false);
  const [partnerSevenDaysChart, setPartnerSevenDaysChart] = useState([]);

  useEffect(() => {
    if(user) {
      let newArray = new Array(7).fill(null).map(() => ({ date: '', conversion: 0, transitions: 0, buy: 0,}));
      user?.statistics?.lastSevenDays?.buys.forEach((item, index) => {
        newArray[index].buy = item.number;
        newArray[index].date = item.date;
      })
      user?.statistics?.lastSevenDays?.clicks.forEach((item, index) => {
        newArray[index].transitions = item.number;
      })
      user?.statistics?.lastSevenDays?.conversions.forEach((item, index) => {
        newArray[index].conversion = item.number;
      })
      setPartnerSevenDaysChart(newArray);
    }
  },[user])

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
          sum={`${user?.statistics?.clicksMonth}`}
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
        <Ernings
          img="./image/icon5.svg"
          sum={`${user?.balance.toFixed(1)}$`}
          title="Balance"
        />
      );
    }
    if (isActiveButton === "conversions") {
      return <Ernings img="./image/icon6.svg" sum={`${user?.statistics?.conversionAllPeriod}%`} title="Conversions" />;
    }
  };

  if(!user) {
    return (
      <Loader/>
    )
  }

  return (
    <div className="admin_content_wrap">
      <div>
        <p className="admin_content_text">Pages / Dashboard</p>
        <h2 className="admin_content_title">Main Dashboard</h2>
      </div>
      <div className="erning_sales_info_wrap">
        <Ernings
          img="./image/icon1.svg"
          sum={`${user?.statistics?.buysMonth || 0}`}
          title="Number of sales per month"
        />
        <Ernings
          img="./image/icon4.svg"
          sum={`${user?.statistics?.buysSumMonth || 0}$`}
          title="Amount of sales per month"
        />
        <Ernings
          img="./image/icon2.svg"
          sum={`${user?.statistics?.clicksMonth || 0}`}
          title="Transitions per month"
        />
        <Ernings
          img="./image/icon3.svg"
          sum={`${user?.statistics?.clicksAllPeriod || 0}`}
          title="Transitions for the entire period"
        />
        <Ernings
          img="./image/icon1.svg"
          sum={`${user?.statistics?.buysAllPeriod || 0}`}
          title="Number of sales for all time"
        />
        <Ernings
          img="./image/icon4.svg"
          sum={`${user?.statistics?.buysSumAllPeriod || 0}$`}
          title="Amount of sales for all time"
        />
        <Ernings
          img="./image/icon5.svg"
          sum={`${user?.balance.toFixed(1) || 0}$`}
          title="Balance"
        />
        <Ernings img="./image/icon6.svg" sum={`${user?.statistics?.conversionAllPeriod || 0}%`} title="Conversions" />
      </div>
      <DashboardButton
        handleActiveButton={handleActiveButton}
        isActiveButton={isActiveButton}
        balanceReward={true}
        conversions={true}
      />
      <div className="partner_dasboard_render_ernings_element">
        {renderErnings()}
      </div>
      <div className="dasboard_user_list_and_chart_wrap">
        <div className="dasboard_user_list">
          <DashboardConversionList
            hendlerOpenConversions={hendlerOpenConversions}
            className={"table_info_item_partner"}
          />
        </div>
        <div className="admin_panel_items derection_wraper">
          <DashboardHeader
            title="Transition"
            hendlerOpen={hendlerOpenConversions}
            setToggleItem={setToggleItem}
            toggleItem={toggleItem}
          />
          {toggleItem ? 
          <WeeklyChart chartArray={partnerSevenDaysChart}/>
          :
          <div className="weekly_chart_wrapp_xl">
          <WeeklyChart chartArray={partnerSevenDaysChart}/>
        </div>
          }
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
