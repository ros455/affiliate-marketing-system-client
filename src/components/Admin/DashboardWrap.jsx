import React, { useEffect, useState } from "react";
import Ernings from "../template/Ernings";
import BalanceSalesCom from "../template/BalanceSalesCom";
import DashboardPrtnerList from "./DashboardPrtnerList";
import WeeklyChart from "../template/WeeklyChart";
import DashboardButton from "../template/DashboardButton";
import DashboardHeader from "../template/DashboardHeader";
// import PartnerMini from './PartnerMini';
// import TiketsMini from './TiketsMini';
const DashboardWrap = ({ hendlerOpenListOfPartner }) => {
  const [isActiveButton, setIsActiveButton] = useState("sales_month");
  const [toggleItem, setToggleItem] = useState(false);

  const handleActiveButton = (activeButton) => {
    setIsActiveButton(activeButton);
  };
  const renderErnings = () => {
    if (isActiveButton === "sales_month") {
      return (
        <Ernings img="./image/dashbord_icon_1.svg" sum="350$" title="Ernings" />
      );
    }
    if (isActiveButton === "transition_month") {
      return (
        <Ernings img="./image/dashbord_icon_2.svg" sum="360$" title="Ernings" />
      );
    }
    if (isActiveButton === "general_transitions") {
      return (
        <Ernings
          img="./image/dashbord_icon_3.svg"
          sum="642$"
          title="Spend this month"
        />
      );
    }
    if (isActiveButton === "total_sales") {
      return (
        <Ernings
          img="./image/dashbord_icon_4.svg"
          sum="642$"
          title="Spend this month"
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
        <Ernings img="./image/icon1.svg" sum="350$" title="Sales month" />
        <Ernings img="./image/icon2.svg" sum="642" title="Transition month" />
        <Ernings
          img="./image/icon3.svg"
          sum="350"
          title="General transitions"
        />
        <Ernings img="./image/icon4.svg" sum="642$" title="Total sales" />
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
            <WeeklyChart />
          </div>
          {toggleItem && <WeeklyChart />}
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
