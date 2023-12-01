import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { statisticAdmin } from "../../../store/auth";
import Ernings from "../../template/Ernings";
import DashboardPrtnerList from "../DashboardPrtnerList";
import WeeklyChart from "../../template/WeeklyChart";
import DashboardButton from "../../template/DashboardButton";
import DashboardHeader from "../../template/DashboardHeader";
import Loader from "../../template/Loader";
const DashboardWrapTab = ({ hendlerOpenListOfPartner, hendlerOpenAdvancedStatistics }) => {
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
          sum={`${statistic?.buysMonth}`}
          title="Number of sales per month"
        />
      );
    }
    if (isActiveButton === "sales_amount_month") {
      return (
        <Ernings
          img="./image/icon4.svg"
          sum={`${statistic?.buysSumMonth || 0}$`}
          title="Amount of sales per month"
        />
      );
    }
    if (isActiveButton === "transition_month") {
      return (
        <Ernings
          img="./image/icon2.svg"
          sum={statistic?.clicksMonth}
          title="Transitions per month"
        />
      );
    }
    if (isActiveButton === "general_transitions") {
      return (
        <Ernings
          img="./image/icon3.svg"
          sum={`${statistic?.clicksAllPeriod}`}
          title="Transitions for the entire period"
        />
      );
    }
    if (isActiveButton === "total_sales") {
      return (
        <Ernings
          img="./image/icon1.svg"
          sum={`${statistic?.buysAllPeriod}`}
          title="Number of sales for all time"
        />
      );
    }
    if (isActiveButton === "total_amount_sales") {
      return (
        <Ernings
          img="./image/icon4.svg"
          sum={`${statistic?.buysSumAllPeriod || 0}$`}
          title="Amount of sales for all time"
        />
      );
    }
    if (isActiveButton === "conversions") {
      return <Ernings img="./image/icon6.svg" sum={`${statistic?.conversionAllPeriod}%`} title="Conversions" />;
    }
  };
  if(!statistic) {
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
          sum={`${statistic?.buysMonth}`}
          title="Number of sales per month"
        />
          <Ernings
          img="./image/icon4.svg"
          sum={`${statistic?.buysSumMonth || 0}$`}
          title="Amount of sales per month"
        />
        <Ernings
          img="./image/icon2.svg"
          sum={statistic?.clicksMonth}
          title="Transitions per month"
        />
        <Ernings
          img="./image/icon3.svg"
          sum={`${statistic?.clicksAllPeriod}`}
          title="Transitions for the entire period"
        />

        <Ernings
          img="./image/icon1.svg"
          sum={`${statistic?.buysAllPeriod}`}
          title="Number of sales for all time"
        />
        <Ernings
          img="./image/icon4.svg"
          sum={`${statistic?.buysSumAllPeriod || 0}$`}
          title="Amount of sales for all time"
        />
        <Ernings
          img="./image/icon6.svg"
          sum={`${statistic?.conversionAllPeriod}%`}
          title="Conversions"
        />
      </div>
      <DashboardButton
        handleActiveButton={handleActiveButton}
        isActiveButton={isActiveButton}
        toggleItem={toggleItem}
        setToggleItem={setToggleItem}
        conversions={true}
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
            setToggleItem={setToggleItem}
            toggleItem={toggleItem}
            showTransistionButton={true}
            handleOpen={hendlerOpenAdvancedStatistics}
          />
          {toggleItem ? 
          <WeeklyChart chartArray={statisticSevenDays}/>
          :
          <div className="weekly_chart_wrapp_xl">
            <WeeklyChart chartArray={statisticSevenDays.reverse()}/>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapTab;
