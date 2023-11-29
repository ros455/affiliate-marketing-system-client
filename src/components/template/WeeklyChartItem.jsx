import React from 'react';

const WeeklyChartItem = ({chart, fullChart, isHovered}) => {
    const maxValue = Math.max(...fullChart.map((el) => el?.transitions));
    const percentage = (chart?.transitions / maxValue) * 100;
    const heightInPx = maxValue === 0 ? 0 : (percentage / 100) * 113;
    return (
        <div
        className="statistic_chart_item_block"
      >
        <div
          className={isHovered ? "statistic_chart_item active" : "statistic_chart_item"}
          style={{
            height: heightInPx === 0 ? "1px" : `${heightInPx}px`,
          }}
        >
          <p className="statistic_chart_item_amount">
            {chart?.transitions}
          </p>
        </div>
        <p className="statistic_chart_item_value"> {chart?.date.split('.')[0]}</p>
      </div>
    );
};

export default WeeklyChartItem;