import { useState } from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../../../store/auth";
import Ernings from "../../template/Ernings";
import StatisticChart from "../../template/StatisticChart";
import DashboardButton from "../../template/DashboardButton";
import DashboardHeader from "../../template/DashboardHeader";

const ProfitAndBonusesTab = () => {
  const user = useSelector(currentUser);

  const [isActiveButton, setIsActiveButton] = useState("sales_month");
  const [toggleItem, setToggleItem] = useState(true);

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
          title="Balance reward"
        />
      );
    }
    if (isActiveButton === "conversions") {
      return <Ernings img="./image/icon6.svg" sum={`${user?.statistics?.conversionAllPeriod}%`} title="Conversions" />;
    }
  };

  return (
    <>
      <div className="derection_table_wrapp_xl">
        <h2 className="profit_and_bonuses_title">Profit and bonuses</h2>
        <div className="profit_and_bonuses_erning_sales_info_wrap">
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
            sum={`${user?.statistics?.clicksMonth}`}
            title="Transitions per month"
          />
          <Ernings
            img="./image/icon3.svg"
            sum={`${user?.statistics?.clicksAllPeriod}`}
            title="Transitions for the entire period"
          />
          <Ernings
            img="./image/icon4.svg"
            sum={`${user?.statistics?.buysAllPeriod}`}
            title="Number of sales for all time"
          />
        <Ernings
          img="./image/icon4.svg"
          sum={`${user?.statistics?.buysSumAllPeriod || 0}$`}
          title="Amount of sales for all time"
        />
          <Ernings img="./image/icon6.svg" sum={`${user?.statistics?.conversionAllPeriod}%`} title="Conversions" />
        </div>
      </div>
      <div className="profit_and_bonuses_wrapp">
        <DashboardButton
          handleActiveButton={handleActiveButton}
          isActiveButton={isActiveButton}
          conversions={true}
        />
        <div className="partner_dasboard_render_ernings_element">
          {renderErnings()}
        </div>
        <div className="admin_panel_items derection_wraper">
          <DashboardHeader
            title="Transition"
            setToggleItem={setToggleItem}
            toggleItem={toggleItem}
          />

          {toggleItem && <StatisticChart 
          chartsMonth={user?.statistics?.chartsMonth}
          chartsYear={user?.statistics?.chartsYear}
          chartsYearAllPeriod={user?.statistics?.chartsYearAllPeriod}/>}
        </div>
      </div>
    </>
  );
};

export default ProfitAndBonusesTab;
