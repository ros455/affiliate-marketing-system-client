import Ernings from "../template/Ernings";
import BalanceSalesCom from "../template/BalanceSalesCom";
import StatisticChart from "../template/StatisticChart";

const ProfitAndBonuses = () => {
  return (
    <>
      <p className="profit_and_bonuses_text">Pages / Dashboard</p>
      <h2 className="profit_and_bonuses_title">Profit and bonuses</h2>
      <div className="profit_and_bonuses_erning_sales_info_wrap">
        <Ernings img="./image/ernings.svg" sum="350$" title="Ernings" />
        <Ernings img="./image/month.svg" sum="642$" title="Spend this month" />
        <BalanceSalesCom title="Sales" sum="574$" isSales={true} />
        <BalanceSalesCom title="Your balance" sum="1000$" isSales={false} />
      </div>
      <StatisticChart />
    </>
  );
};

export default ProfitAndBonuses;
