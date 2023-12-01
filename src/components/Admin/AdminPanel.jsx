import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardWrapTab from "./Tabs/DashboardWrapTab";
import ListOfPartnerTab from "./Tabs/ListOfPartnerTab";
import AdvancedStatisticsTab from "./Tabs/AdvancedStatisticsTab";
import RewardSettingsTab from "./Tabs/RewardSettingsTab";
import ProfileTab from "./Tabs/ProfileTab";
import PaymentsTab from "./Tabs/Paymants/PaymentsTab";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { allUsers } from "../../store/auth";
import { AiFillHome } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiLogOut, BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsCart2, BsFillPersonFill } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import BurgerButton from "../template/BurgerButton";

const AdminPanel = () => {
  const [isDashboadr, setIsDashboadr] = useState(true);
  const [isListOfPartner, setIsListOfPartner] = useState(false);
  const [isAdvancedStatistics, setIsAdvancedStatistics] = useState(false);
  const [isRewardSettings, setIsRewardSettings] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isPayments, setIsPayments] = useState(false);

  const [activeBurgerButton, setActiveBurgerButton] = useState(true);

  const navigate = useNavigate();

  const checkScreenWidthAndSetActive = () => {
    if (window.matchMedia("(max-width: 992px)").matches) {
      setActiveBurgerButton(false);
    }
  };

  const hendlerOpenDashboadr = () => {
    setIsDashboadr(true);
    setIsListOfPartner(false);
    setIsAdvancedStatistics(false);
    setIsRewardSettings(false);
    setIsProfile(false);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenListOfPartner = () => {
    setIsDashboadr(false);
    setIsListOfPartner(true);
    setIsAdvancedStatistics(false);
    setIsRewardSettings(false);
    setIsProfile(false);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenAdvancedStatistics = () => {
    setIsDashboadr(false);
    setIsListOfPartner(false);
    setIsAdvancedStatistics(true);
    setIsRewardSettings(false);
    setIsProfile(false);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenRewardSettings = () => {
    setIsDashboadr(false);
    setIsListOfPartner(false);
    setIsAdvancedStatistics(false);
    setIsRewardSettings(true);
    setIsProfile(false);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenProfile = () => {
    setIsDashboadr(false);
    setIsListOfPartner(false);
    setIsAdvancedStatistics(false);
    setIsRewardSettings(false);
    setIsProfile(true);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenPayments = () => {
    setIsDashboadr(false);
    setIsListOfPartner(false);
    setIsAdvancedStatistics(false);
    setIsRewardSettings(false);
    setIsProfile(false);
    checkScreenWidthAndSetActive();
    setIsPayments(true);
  };

  const logoutAdministration = () => {
    window.localStorage.removeItem("A-M-S-token");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia("(max-width: 992px)");
    const changeActive = () => {
      setActiveBurgerButton(!matchMedia.matches);
    };

    changeActive();
    matchMedia.addEventListener("change", changeActive);
    return () => {
      matchMedia.removeEventListener("change", changeActive);
    };
  }, []);

  return (
    <div className="admin_panel_wraper">
      <BurgerButton
        activeBurgerButton={activeBurgerButton}
        setActiveBurgerButton={setActiveBurgerButton}
      />
      <div className="admin_panel">
        {activeBurgerButton && (
          <aside className="admin_panel_aside-menu">
            <p className="logo_admin">
              <span>Logo</span>
            </p>
            <nav className="admin_panel_nav-bar">
              <ul className="nav_list">
                <li
                  onClick={hendlerOpenDashboadr}
                  className={`nav_list-item ${
                    isDashboadr ? "nav_list-item-active" : ""
                  } `}
                >
                  <AiFillHome />
                  Dashboard
                </li>
                <li
                  onClick={hendlerOpenListOfPartner}
                  className={`nav_list-item ${
                    isListOfPartner ? "nav_list-item-active" : ""
                  } `}
                >
                  <BsCart2 />
                  List of partners
                </li>
                <li
                  onClick={hendlerOpenAdvancedStatistics}
                  className={`nav_list-item ${
                    isAdvancedStatistics ? "nav_list-item-active" : ""
                  } `}
                >
                  <BiSolidBarChartAlt2 />
                  Advanced statistics
                </li>
                <li
                  onClick={hendlerOpenRewardSettings}
                  className={`nav_list-item ${
                    isRewardSettings ? "nav_list-item-active" : ""
                  } `}
                >
                  <GiSettingsKnobs />
                  Reward settings
                </li>
                <li
                  onClick={hendlerOpenProfile}
                  className={`nav_list-item ${
                    isProfile ? "nav_list-item-active" : ""
                  } `}
                >
                  <BsFillPersonFill />
                  Profile
                </li>
                <li className={`nav_list-item ${
                    isPayments ? "nav_list-item-active" : ""
                  } `} 
                  onClick={hendlerOpenPayments}>
                  <FaMoneyCheckDollar />
                  Payments
                </li>
                <li className="nav_list-item" onClick={logoutAdministration}>
                  <BiLogOut />
                  Log Out
                </li>
              </ul>
            </nav>
          </aside>
        )}
        <div className="admin_panel_content-wraper">
          <div className="title_body">
            {isDashboadr && (
              <DashboardWrapTab
                hendlerOpenListOfPartner={hendlerOpenListOfPartner}
                hendlerOpenAdvancedStatistics={hendlerOpenAdvancedStatistics}
              />
            )}
            {isListOfPartner && <ListOfPartnerTab />}
            {isAdvancedStatistics && <AdvancedStatisticsTab />}
            {isRewardSettings && <RewardSettingsTab />}
            {isProfile && <ProfileTab />}
            {isPayments && <PaymentsTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
