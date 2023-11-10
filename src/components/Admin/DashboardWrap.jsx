import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { statisticAdmin } from "../../store/auth";
import Ernings from "../template/Ernings";
import BalanceSalesCom from "../template/BalanceSalesCom";
import DashboardPrtnerList from "./DashboardPrtnerList";
import WeeklyChart from "../template/WeeklyChart";
import DashboardButton from "../template/DashboardButton";
import DashboardHeader from "../template/DashboardHeader";
// import PartnerMini from './PartnerMini';
// import TiketsMini from './TiketsMini';
const DashboardWrap = ({ hendlerOpenListOfPartner }) => {
  const [statisticSevenDays, setStatisticSevenDays] = useState([]);
  const statistic = useSelector(statisticAdmin);

  const [isActiveButton, setIsActiveButton] = useState("sales_month");
  const [toggleItem, setToggleItem] = useState(false);

  useEffect(() => {
    if(statistic?.lastSevenDaysConversions) {
      const newArr = [];
      statistic.lastSevenDaysConversions.forEach((item) => {
        newArr.push({
          date: item.date,
          transitions: item.number,
          _id: item._id
        })
        setStatisticSevenDays(newArr);
      })
    }
  },[statistic])

  const handleActiveButton = (activeButton) => {
    setIsActiveButton(activeButton);
  };
  const renderErnings = () => {
    if (isActiveButton === "sales_month") {
      return (
        <Ernings
          img="./image/icon1.svg"
          sum={`${statistic?.buysMonth}$`}
          title="Sales month"
        />
      );
    }
    if (isActiveButton === "transition_month") {
      return (
        <Ernings
          img="./image/icon2.svg"
          sum={statistic?.clicksMonth}
          title="Transition month"
        />
      );
    }
    if (isActiveButton === "general_transitions") {
      return (
        <Ernings
          img="./image/icon3.svg"
          sum={`${statistic?.clicksAllPeriod}`}
          title="General transitions"
        />
      );
    }
    if (isActiveButton === "total_sales") {
      return (
        <Ernings
          img="./image/icon4.svg"
          sum={`${statistic?.buysAllPeriod}$`}
          title="Total sales"
        />
      );
    }
  };
  return (
    <div className="admin_content_wrap">
      <div>
        <p className="admin_content_text">Pages / Dashboard</p>
        <h2 className="admin_content_title">Main Dashboard</h2>
      </div>
      <div className="erning_sales_info_wrap">
        <Ernings
          img="./image/icon1.svg"
          sum={`${statistic?.buysMonth}`}
          title="Sales month"
        />
        <Ernings
          img="./image/icon2.svg"
          sum={statistic?.clicksMonth}
          title="Transition month"
        />
        <Ernings
          img="./image/icon3.svg"
          sum={`${statistic?.clicksAllPeriod}`}
          title="General transitions"
        />

        <Ernings
          img="./image/icon4.svg"
          sum={`${statistic?.buysAllPeriod}`}
          title="Total sales"
        />
        {/* <BalanceSalesCom title="Sales" sum="574$" isSales={true} />
        <BalanceSalesCom title="Your balance" sum="1000$" isSales={false} /> */}
      </div>
      <DashboardButton
        handleActiveButton={handleActiveButton}
        isActiveButton={isActiveButton}
        toggleItem={toggleItem}
        setToggleItem={setToggleItem}
      />
      <div className="partner_dasboard_render_ernings_element">
        {renderErnings()}
      </div>
      <div className="dasboard_user_list_and_chart_wrap">
        <div className="dasboard_user_list">
          <DashboardPrtnerList
            hendlerOpenListOfPartner={hendlerOpenListOfPartner}
          />
        </div>
        <div className="admin_panel_items derection_wraper">
          <DashboardHeader
            title="Transition"
            // hendlerOpen={hendlerOpenConversions}
            setToggleItem={setToggleItem}
            toggleItem={toggleItem}
          />
          <div className="weekly_chart_wrapp_xl">
            <WeeklyChart chartArray={statisticSevenDays}/>
          </div>
          {toggleItem && <WeeklyChart chartArray={statisticSevenDays}/>}
        </div>
        {/* <WeeklyChart /> */}
      </div>
      {/* <div className='partner_info_wrap'>
                <PartnerMini/>
                <TiketsMini/>
            </div> */}
    </div>
  );
};

export default DashboardWrap;
