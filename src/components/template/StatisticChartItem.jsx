const StatisticChartItem = ({
  chart,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="statistic_chart_item_block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={
          isHovered ? "statistic_chart_item active" : "statistic_chart_item"
        }
        style={{
          height: chart.procent === "0%" ? "1px" : chart.procent,
        }}
      >
        <p className="statistic_chart_item_amount">{chart.procent}</p>
      </div>
      <p className="statistic_chart_item_value"> {chart.date}</p>
    </div>
  );
};

export default StatisticChartItem;
