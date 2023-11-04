import { useState } from "react";
import Ernings from "../template/Ernings";
import BalanceSalesCom from "../template/BalanceSalesCom";
import StatisticChart from "../template/StatisticChart";
import DashboardButton from "../template/DashboardButton";
import DashboardHeader from "../template/DashboardHeader";

const ProfitAndBonuses = () => {
  const [isActiveButton, setIsActiveButton] = useState("sales_month");
  const [toggleItem, setToggleItem] = useState(true);

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
    <>
      <div className="derection_table_wrapp_xl">
        <p className="profit_and_bonuses_text">Pages / Dashboard</p>
        <h2 className="profit_and_bonuses_title">Profit and bonuses</h2>
        <div className="profit_and_bonuses_erning_sales_info_wrap">
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
      </div>
      <div className="profit_and_bonuses_wrapp">
        <DashboardButton
          handleActiveButton={handleActiveButton}
          isActiveButton={isActiveButton}
        />
        <div className="partner_dasboard_render_ernings_element">
          {renderErnings()}
        </div>
        <div className="admin_panel_items derection_wraper">
          <DashboardHeader
            title="Transition"
            // hendlerOpen={hendlerOpenConversions}
            setToggleItem={setToggleItem}
            toggleItem={toggleItem}
          />
          <div className="weekly_chart_wrapp_xl">
            <StatisticChart />
          </div>
          {toggleItem && <StatisticChart />}
        </div>
      </div>
    </>
  );
};

export default ProfitAndBonuses;
