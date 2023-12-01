import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { currentUser } from "../../../../store/auth";
import WithdrawMoneyForParthner from "./WithdrawMoneyForParthner";
import HistoryTransactions from "./HistoryTransactions";
import MySavedAddress from "./MySavedAddress";

const PaymantParthnerTab = () => {
  const [reloadData, setReloadData] = useState(false);
  const user = useSelector(currentUser);
  return (
    <div>
      <div>
        <WithdrawMoneyForParthner
          img="./image/icon5.svg"
          sum={`${user?.balance.toFixed(1)}`}
          title="Balance"
          user={user}
          setReloadData={setReloadData}
        />
      </div>
      <p className="title_diferent_components"></p>
      <div>
        <HistoryTransactions 
        setReloadData={setReloadData}
        reloadData={reloadData}/>
      </div>
      <p className="title_diferent_components">Add withdrawal method</p>
      <div>
        <MySavedAddress />
      </div>
    </div>
  );
};

export default PaymantParthnerTab;
