import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { allUsers } from "../../store/auth";
import { BsThreeDots } from "react-icons/bs";

import PartnerTable from "../template/PartnerTable";
import DashboardHeader from "../template/DashboardHeader";
const DashboardPrtnerList = ({ hendlerOpenListOfPartner }) => {
  const [toggleItem, setToggleItem] = useState(true);
  const [allUsersState, setAllUsersState] = useState([]);
  const allUser = useSelector(allUsers) || [];

  useEffect(() => {
    if (allUser.length) {
      setAllUsersState(allUser.slice(0, 5));
    }
  }, [allUser]);

  return (
    <div className="admin_panel_items derection_wraper">
      <DashboardHeader
        title="Partner"
        hendlerOpen={hendlerOpenListOfPartner}
        setToggleItem={setToggleItem}
        toggleItem={toggleItem}
      />
      <div className="derection_table_wrapp_xl">
        <div className="derection_table_wrap">
          <div className="table_header">
            <p className="colum colum_name">Name</p>
            <p className="colum ">Conversion</p>
            <p className="colum ">Transitions</p>
            <p className="colum ">Sales</p>
          </div>
          <div className="table_body">
            {!!allUsersState.length &&
              allUsersState.map((user) => (
                <div className="derection_table_info_item " key={user?._id}>
                  <p className="colum row colum_name">{user?.name}</p>
                  <p className="colum row colum_progres">{user?.statistics?.conversionAllPeriod.toFixed(1)}</p>
                  <p className="colum row colum_quantity">{user?.statistics?.clicksAllPeriod}</p>
                  <p className="colum row colum_data">{user?.statistics?.buysAllPeriod}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {toggleItem && <PartnerTable partner={allUsersState} />}
    </div>
  );
};

export default DashboardPrtnerList;
