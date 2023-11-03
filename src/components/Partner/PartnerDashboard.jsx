import React, { useEffect, useState } from "react";
import Ernings from "../template/Ernings";
import BalanceSalesCom from "../template/BalanceSalesCom";
import WeeklyChart from "../template/WeeklyChart";
import DashboardConversionList from "./DashboardConversionList";
import DashboardButton from "../template/DashboardButton";
const PartnerDashboard = ({ hendlerOpenConversions }) => {
  const [isActiveButton, setIsActiveButton] = useState("sales_month");

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
      <h2>Main Dashboard</h2>
      <div className="erning_sales_info_wrap">
        <Ernings img="./image/ernings.svg" sum="350$" title="Ernings" />
        <Ernings img="./image/month.svg" sum="642$" title="Spend this month" />
        <BalanceSalesCom title="Sales" sum="574$" isSales={true} />
        <BalanceSalesCom title="Your balance" sum="1000$" isSales={false} />
      </div>
      <DashboardButton
        handleActiveButton={handleActiveButton}
        isActiveButton={isActiveButton}
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
        <WeeklyChart />
      </div>
      {/* <div className='partner_info_wrap'>
                <PartnerMini/>
                <TiketsMini/>
            </div> */}
    </div>
  );
};

export default PartnerDashboard;
