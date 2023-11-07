const StatisticChartItem = ({
  currentDate,
  chart,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  activeActionsButton,
}) => {
  const maxValue = Math.max(...currentDate.map((el) => el.number));
  const percentage = (chart.number / maxValue) * 100;
  const heightInPx = maxValue === 0 ? 0 : (percentage / 100) * 113;

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
          height: heightInPx === 0 ? "1px" : `${heightInPx}px`,
        }}
      >
        <p className="statistic_chart_item_amount">
          {chart.number}
          {activeActionsButton === "conversions" ? "%" : ""}
        </p>
      </div>
      <p className="statistic_chart_item_value"> {chart.date}</p>
    </div>
  );
};

export default StatisticChartItem;
