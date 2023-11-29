import { useState } from "react";
import RewardListPartner from "../RewardListPartner";
import Ernings from "../../template/Ernings";
import UploadImageTemplate from "../../template/UploadImageTemplate";
const RewardSettingsTab = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <p className="reward_one_text">Pages / Partners / UserOne</p>
      <h2 className="reward_one_title">Reward</h2>
      {/* <div className="reward_balance_wrapp">
        <Ernings img="./image/icon6.svg" sum="1%" title="Default reward" />
        <Ernings img="./image/icon6.svg" sum="2%" title="Premium" />
      </div> */}
      <RewardListPartner setIsShow={setIsShow}/>
      {isShow && <UploadImageTemplate/>}
    </>
  );
};

export default RewardSettingsTab;
