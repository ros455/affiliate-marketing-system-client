import Ernings from "../template/Ernings";
import BalanceSalesCom from "../template/BalanceSalesCom";
import StatisticChart from "../template/StatisticChart";

const UserOne = ({ setActiveUser, currentUser }) => {
  return (
    <>
      <p className="user_one_text">Pages / Partners / UserOne</p>
      <div className="user_one_title_wrapp">
        <h2 className="user_one_title">{currentUser.name}</h2>
        <button
          type="button"
          className="user_one_btn_back"
          onClick={() => setActiveUser(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M42.75 15.75V29.25C42.75 31.7318 40.734 33.75 38.25 33.75H6.75V27H36V18H11.25V22.5L2.25 14.625L11.25 6.75V11.25H38.25C39.4435 11.25 40.5881 11.7241 41.432 12.568C42.2759 13.4119 42.75 14.5565 42.75 15.75Z"
              fill="#2B3674"
            />
          </svg>
        </button>
      </div>
      <div className="user_one_erning_sales_info_wrap">
        <Ernings img="./image/ernings.svg" sum="350$" title="Ernings" />
        <Ernings img="./image/month.svg" sum="642$" title="Spend this month" />
        <BalanceSalesCom title="Sales" sum="574$" isSales={true} />
        <BalanceSalesCom title="Your balance" sum="1000$" isSales={false} />
        <BalanceSalesCom title="Reward balance" sum="1000$" isSales={false} />
        <BalanceSalesCom title="Conversions" sum="50%" isSales={false} />
      </div>
      <StatisticChart />
    </>
  );
};

export default UserOne;
