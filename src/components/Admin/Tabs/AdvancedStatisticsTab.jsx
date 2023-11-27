import React, { useEffect, useState } from "react";
import StatisticChart from "../../template/StatisticChart";
import { useSelector } from "react-redux";
import { statisticAdmin } from "../../../store/auth";
const AdvancedStatisticsTab = () => {
  const adminStatistic = useSelector(statisticAdmin);

  return (
    <>
      <p className="admin_content_text">Pages / Dashboard</p>
      <h2 className="admin_content_title">Stats</h2>
      <StatisticChart
        chartsMonth={adminStatistic?.chartsMonth}
        chartsYear={adminStatistic?.chartsYear}
        chartsYearAllPeriod={adminStatistic?.chartsYearAllPeriod}
      />
    </>
  );
};

export default AdvancedStatisticsTab;
