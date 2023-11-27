import { BsThreeDots } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const DashboardHeader = ({ title, hendlerOpen, setToggleItem, toggleItem }) => {
  return (
    <div className="dashboard_list_header">
      <h3 className="dashboard_list_title">{title}</h3>
      <div className="dashboard_list_three_dot_block_wrapp">
        <div className="dashboard_list_three_dot_block">
          <BsThreeDots
            // onClick={hendlerOpen ? () => hendlerOpen() : null}
            className="dashboard_list_three_dot_icon"
          />
        </div>
        <div className="dashboard_list_three_dot_block dashboard_list_three_dot_block_arrow">
          <MdOutlineKeyboardArrowUp
            onClick={() => setToggleItem(!toggleItem)}
            className={
              toggleItem
                ? "dashboard_list_three_dot_icon dashboard_list_three_dot_icon_active"
                : "dashboard_list_three_dot_icon"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
