import React, { useState } from "react";
import WeeklyChartItem from "./WeeklyChartItem";
const WeeklyChart = () => {
  const [chartArray] = useState([
    {
      procent: "40%",
    },
    {
      procent: "60%",
    },
    {
      procent: "100%",
    },
    {
      procent: "800%",
    },
    {
      procent: "90%",
    },
    {
      procent: "30%",
    },
    {
      procent: "50%",
    },
  ]);
  const [deteArray] = useState(["07", "08", "09", "10", "11", "12", "13"]);
  return (
    <div className="weekly_chart_wrap">
      {/* <div className='weekly_chart_header'>
                <p className='weekly_chart_header_title'>Transitions</p>
            </div> */}
      <div className="weekly_chart_main_number_block">
        <p className="weekly_chart_visitors">
          2656<span>Visitors</span>
        </p>
      </div>
      <div className="weekly_chart_main_block">
        {chartArray.map((chart, idx) => (
          <WeeklyChartItem chart={chart} key={idx} />
        ))}
      </div>
      <div className="weekly_chart_date_main_block">
        {deteArray.map((date) => (
          <div className="weekly_chart_date_item" key={date}>
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyChart;
