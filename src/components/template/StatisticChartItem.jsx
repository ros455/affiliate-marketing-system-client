const StatisticChartItem = ({ chart }) => {
  return (
    <div className="statistic_chart_item_block">
      <div
        className="statistic_chart_item"
        style={{ height: `${chart.procent}` }}
      ></div>
      <p className="statistic_chart_item_value"> {chart.date}</p>
    </div>
  );
};

export default StatisticChartItem;
