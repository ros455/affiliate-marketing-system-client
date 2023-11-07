import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../../store/auth";
import Ernings from "../template/Ernings";
import BalanceSalesCom from "../template/BalanceSalesCom";
import WeeklyChart from "../template/WeeklyChart";
import DashboardConversionList from "./DashboardConversionList";
import DashboardButton from "../template/DashboardButton";
import DashboardHeader from "../template/DashboardHeader";
const PartnerDashboard = ({ hendlerOpenConversions }) => {
  const user = useSelector(currentUser);

  const [isActiveButton, setIsActiveButton] = useState("sales_month");
  const [toggleItem, setToggleItem] = useState(false);

  const handleActiveButton = (activeButton) => {
    setIsActiveButton(activeButton);
  };
  const renderErnings = () => {
    if (isActiveButton === "sales_month") {
      return (
        <Ernings
          img="./image/icon1.svg"
          sum={`${user.statistics.buysMonth}$`}
          title="Sales month"
        />
      );
    }
    if (isActiveButton === "transition_month") {
      return (
        <Ernings
          img="./image/icon2.svg"
          sum={`${user.statistics.clicksMonth}`}
          title="Transition month"
        />
      );
    }
    if (isActiveButton === "general_transitions") {
      return (
        <Ernings
          img="./image/icon3.svg"
          sum={`${user.statistics.clicksAllPeriod}`}
          title="General transitions"
        />
      );
    }
    if (isActiveButton === "total_sales") {
      return (
        <Ernings
          img="./image/icon4.svg"
          sum={`${user.statistics.buysAllPeriod}$`}
          title="Total sales"
        />
      );
    }
    if (isActiveButton === "balance_reward") {
      return (
        <Ernings
          img="./image/icon5.svg"
          sum={`${user.balance}$`}
          title="Balance reward"
        />
      );
    }
    if (isActiveButton === "conversions") {
      return <Ernings img="./image/icon6.svg" sum="642$" title="Conversions" />;
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
          sum={`${user.statistics.buysMonth}$`}
          title="Sales month"
        />
        <Ernings
          img="./image/icon2.svg"
          sum={`${user.statistics.clicksMonth}`}
          title="Transition month"
        />
        <Ernings
          img="./image/icon3.svg"
          sum={`${user.statistics.clicksAllPeriod}`}
          title="General transitions"
        />
        <Ernings
          img="./image/icon4.svg"
          sum={`${user.statistics.buysAllPeriod}$`}
          title="Total sales"
        />
        <Ernings
          img="./image/icon5.svg"
          sum={`${user.balance}$`}
          title="Balance reward"
        />
        <Ernings img="./image/icon6.svg" sum="642$" title="Conversions" />
        {/* <BalanceSalesCom title="Sales" sum="574$" isSales={true} />
        <BalanceSalesCom title="Your balance" sum="1000$" isSales={false} /> */}
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

      {/* <div style={{display:'flex'}}>
                <div style={{width: '60%'}}>
                </div>
                <div style={{width:'40%'}}>
            <WeeklyChart/>
                </div>
            </div> */}
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
          <div className="weekly_chart_wrapp_xl">
            <WeeklyChart />
          </div>
          {toggleItem && <WeeklyChart />}
        </div>
      </div>
      {/* <div className='partner_info_wrap'>
                <PartnerMini/>
                <TiketsMini/>
            </div> */}
    </div>
  );
};

export default PartnerDashboard;
