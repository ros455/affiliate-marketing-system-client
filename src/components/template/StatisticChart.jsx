import { useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import StatisticChartItem from "./StatisticChartItem";

const StatisticChart = () => {
  const chartArrayDays = [
    { procent: "40%", date: "01" },
    { procent: "60%", date: "02" },
    { procent: "100%", date: "03" },
    { procent: "800%", date: "04" },
    { procent: "90%", date: "05" },
    { procent: "30%", date: "06" },
    { procent: "50%", date: "07" },
    { procent: "90%", date: "08" },
    { procent: "30%", date: "09" },
    { procent: "50%", date: "10" },
    { procent: "40%", date: "11" },
    { procent: "60%", date: "12" },
    { procent: "100%", date: "13" },
    { procent: "800%", date: "14" },
    { procent: "90%", date: "15" },
    { procent: "30%", date: "16" },
    { procent: "50%", date: "17" },
    { procent: "90%", date: "18" },
    { procent: "30%", date: "19" },
    { procent: "50%", date: "20" },
    { procent: "40%", date: "21" },
    { procent: "60%", date: "22" },
    { procent: "100%", date: "23" },
    { procent: "800%", date: "24" },
    { procent: "90%", date: "25" },
    { procent: "30%", date: "26" },
    { procent: "50%", date: "27" },
    { procent: "90%", date: "28" },
    { procent: "30%", date: "29" },
    { procent: "50%", date: "30" },
    { procent: "40%", date: "31" },
  ];
  const chartArrayMonth = [
    { procent: "40%", date: "01" },
    { procent: "60%", date: "02" },
    { procent: "100%", date: "03" },
    { procent: "800%", date: "04" },
    { procent: "90%", date: "05" },
    { procent: "30%", date: "06" },
    { procent: "50%", date: "07" },
    { procent: "90%", date: "08" },
    { procent: "30%", date: "09" },
    { procent: "50%", date: "10" },
    { procent: "40%", date: "11" },
    { procent: "0%", date: "12" },
  ];

  const [activeActionsButton, setActiveActionsButton] = useState("transitions");
  const [activeStatisticDate, setActiveStatisticDate] = useState("day");
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleStatisticActions = (buttonName) => {
    setActiveActionsButton(buttonName);
  };
  const handleStatisticDate = (buttonName) => {
    setActiveStatisticDate(buttonName);
  };

  const currentDate = () => {
    if (activeStatisticDate === "day") {
      return chartArrayDays;
    }
    if (activeStatisticDate === "month") {
      return chartArrayMonth;
    }

    return chartArrayDays;
  };

  return (
    <div className="statistic_chart">
      <div className="statistic_chart_wrapp">
        <div className="statistic_chart_actions_wrapp">
          <button
            className={`statistic_chart_actions_btn ${
              activeActionsButton === "transitions"
                ? "statistic_chart_actions_btn_active"
                : ""
            }`}
            type="button"
            onClick={() => handleStatisticActions("transitions")}
          >
            Transitions
          </button>
          <button
            className={`statistic_chart_actions_btn ${
              activeActionsButton === "sales"
                ? "statistic_chart_actions_btn_active"
                : ""
            }`}
            type="button"
            onClick={() => handleStatisticActions("sales")}
          >
            Sales
          </button>
          <button
            className={`statistic_chart_actions_btn ${
              activeActionsButton === "conversions"
                ? "statistic_chart_actions_btn_active"
                : ""
            }`}
            type="button"
            onClick={() => handleStatisticActions("conversions")}
          >
            Conversions
          </button>
        </div>
        <div className="statistic_chart_date_wrapp">
          <button
            className={`statistic_chart_date_btn ${
              activeStatisticDate === "day"
                ? "statistic_chart_date_btn_active"
                : ""
            }`}
            type="button"
            onClick={() => handleStatisticDate("day")}
          >
            Day
          </button>
          <button
            className={`statistic_chart_date_btn ${
              activeStatisticDate === "month"
                ? "statistic_chart_date_btn_active"
                : ""
            }`}
            type="button"
            onClick={() => handleStatisticDate("month")}
          >
            Month
          </button>
          <button
            className={`statistic_chart_date_btn ${
              activeStatisticDate === "year"
                ? "statistic_chart_date_btn_active"
                : ""
            }`}
            type="button"
            onClick={() => handleStatisticDate("year")}
          >
            Year
          </button>
          <button className="statistic_chart_date_btn" type="button">
            <MdCalendarMonth className="statistic_chart_date_btn_icon" />
          </button>
        </div>
      </div>
      <p className="statistic_chart_visitors">
        2.579<span>Visitors</span>
      </p>
      <div className="statistic_chart_main_block_wrapp">
        <div className="statistic_chart_main_block_text_wrapp">
          <p className="statistic_chart_main_block_text">100</p>
          <p className="statistic_chart_main_block_text">0</p>
        </div>
        <div
          className="statistic_chart_main_block"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {currentDate().map((chart, idx) => (
            <StatisticChartItem
              chart={chart}
              key={idx}
              isHovered={hoveredItem === idx}
              onMouseEnter={() => setHoveredItem(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticChart;
