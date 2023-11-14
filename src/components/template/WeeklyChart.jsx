import React, { useState, useEffect } from "react";
import WeeklyChartItem from "./WeeklyChartItem";
const WeeklyChart = ({chartArray}) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    if(chartArray) {
      const totalTransitions = chartArray.reduce((acc, current) => acc + current?.transitions, 0);
      setVisitors(totalTransitions);
    }
  },[chartArray])

  console.log('chartArray',chartArray);
  return (
    <div className="weekly_chart_wrap">
      <div className="weekly_chart_main_number_block">
        <p className="weekly_chart_visitors">
        {visitors}<span> Visitors</span>
        </p>
      </div>
      <div className="weekly_chart_main_block" onMouseLeave={() => setHoveredItem(null)}>
        {chartArray && !!chartArray.length && chartArray.map((chart, idx) => (
          <div onMouseEnter={() => setHoveredItem(idx)} key={chart._id}>
            <WeeklyChartItem chart={chart} fullChart={chartArray} isHovered={hoveredItem === idx}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyChart;
