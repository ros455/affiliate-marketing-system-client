import React, { useEffect, useState } from "react";
import ConversionTable from "../template/ConversionTable";
import DashboardHeader from "../template/DashboardHeader";
import { useSelector } from "react-redux";
import { currentUser } from "../../store/auth";
const DashboardConversionList = ({ hendlerOpenConversions, className }) => {
  const [toggleItem, setToggleItem] = useState(true);
  const [dashboardStatistic, setDashboardStatistic] = useState([]);
  const user = useSelector(currentUser);
  
  useEffect(() => {
    if(user) {
      let newArray = new Array(7).fill(null).map(() => ({ date: '', conversion: 0, transitions: 0, buy: 0, id: ''}));
      user?.statistics.lastSevenDays.buys.forEach((item, index) => {
        newArray[index].buy = item.number;
        newArray[index].date = item.date;
        newArray[index].id = item._id;
      })
      user?.statistics.lastSevenDays.clicks.forEach((item, index) => {
        newArray[index].transitions = item.number;
      })
      user?.statistics.lastSevenDays.conversions.forEach((item, index) => {
        newArray[index].conversion = item.number;
      })
      setDashboardStatistic(newArray);
    }
  },[user])


  return (
    <div className="admin_panel_items derection_wraper">
      <DashboardHeader
        title="Statistic"
        hendlerOpen={hendlerOpenConversions}
        setToggleItem={setToggleItem}
        toggleItem={toggleItem}
      />
      <div className="derection_table_wrapp_xl">
        <div className="derection_table_wrap">
          <div className="table_header">
            <p className="colum colum_name">Date</p>
            <p className="colum ">Conversion</p>
            <p className="colum ">Transitions</p>
            <p className="colum ">Sales</p>
          </div>
          <div className="table_body">
            {!!dashboardStatistic.length &&
              dashboardStatistic.map((item, idx) => (
                <div className={`table_info_item ${className}`} key={idx}>
                  <p className="colum row colum_name">{item.date}</p>
                  <p className="colum row colum_progres">{item.conversion}%</p>
                  <p className="colum row colum_quantity">{item.transitions}</p>
                  <p className="colum row colum_data">{item.buy}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      {toggleItem && <ConversionTable conversion={dashboardStatistic} />}
    </div>
  );
};

export default DashboardConversionList;
