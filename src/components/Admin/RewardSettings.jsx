import RewardListPartner from "./RewardListPartner";
import BalanceSalesCom from "../template/BalanceSalesCom";

const RewardSettings = () => {
  return (
    <>
      <p className="reward_one_text">Pages / Partners / UserOne</p>
      <h2 className="reward_one_title">Reward</h2>
      <div className="reward_balance_wrapp">
        <BalanceSalesCom title="Default reward" sum="50%" isSales={false} />
        <BalanceSalesCom title="Premium reward" sum="50%" isSales={false} />
      </div>
      <RewardListPartner />
    </>
  );
};

export default RewardSettings;
