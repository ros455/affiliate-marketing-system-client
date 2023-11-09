import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { allUsers } from "../../store/auth";
import { BsThreeDots } from "react-icons/bs";
const AllPrtnerList = ({ hendlerOpenListOfPartner }) => {
  const [allUsersState, setAllUsersState] = useState([]);
  const allUser = useSelector(allUsers);

  useEffect(() => {
    if (allUser) {
      setAllUsersState(allUser);
    }
  }, [allUser]);

  console.log("allUsersState", allUsersState);
  return (
    <div className="admin_panel_items derection_wraper">
      <div className="dashboard_list_header">
        <h3 className="dashboard_list_title">Partner</h3>
        <div className="dashboard_list_three_dot_block">
          <BsThreeDots
            onClick={() => hendlerOpenListOfPartner()}
            className="dashboard_list_three_dot_icon"
          />
        </div>
      </div>
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
              <div className="table_info_item" key={user._id}>
                <p className="colum row colum_name">{user.name}</p>
                <p className="colum row colum_progres">2</p>
                <p className="colum row colum_quantity">3</p>
                <p className="colum row colum_data">41</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllPrtnerList;
