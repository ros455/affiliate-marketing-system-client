import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PartnerDashboard from "./Tabs/PartnerDashboardTab";
import ProfitAndBonuses from "./Tabs/ProfitAndBonusesTab";
import ReferralProgram from "./Tabs/ReferralProgramTab";
import PartnerProfile from "./Tabs/PartnerProfileTab";
import PaymantParthnerTab from './Tabs/Paymant/PaymantParthnerTab';
import { AiFillHome } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiLogOut, BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsCart2, BsFillPersonFill } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import BurgerButton from "../template/BurgerButton";

const PartnerPanel = () => {
  const [isDashboadr, setIsDashboadr] = useState(true);
  const [isProfitAndBonuses, setIsProfitAndBonuses] = useState(false);
  const [isReferralProgram, setIsReferralProgram] = useState(false);
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
    setIsProfitAndBonuses(false);
    setIsReferralProgram(false);
    setIsProfile(false);
    setActiveBurgerButton(true);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenProfitAndBonuses = () => {
    setIsDashboadr(false);
    setIsProfitAndBonuses(true);
    setIsReferralProgram(false);
    setIsProfile(false);
    setActiveBurgerButton(true);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenConversions = () => {
    setIsDashboadr(false);
    setIsProfitAndBonuses(false);
    setIsReferralProgram(false);
    setIsProfile(false);
    setActiveBurgerButton(true);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenReferralProgram = () => {
    setIsDashboadr(false);
    setIsProfitAndBonuses(false);
    setIsReferralProgram(true);
    setIsProfile(false);
    setActiveBurgerButton(true);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenProfile = () => {
    setIsDashboadr(false);
    setIsProfitAndBonuses(false);
    setIsReferralProgram(false);
    setIsProfile(true);
    setActiveBurgerButton(true);
    checkScreenWidthAndSetActive();
    setIsPayments(false);
  };
  const hendlerOpenPaymant = () => {
    setIsDashboadr(false);
    setIsProfitAndBonuses(false);
    setIsReferralProgram(false);
    setIsProfile(false);
    setActiveBurgerButton(true);
    checkScreenWidthAndSetActive();
    setIsPayments(true);
  };

  const handleLogoutPartner = () => {
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
              Bus <span>Logo</span>
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
                  onClick={hendlerOpenProfitAndBonuses}
                  className={`nav_list-item ${
                    isProfitAndBonuses ? "nav_list-item-active" : ""
                  } `}
                >
                  <BsCart2 />
                  Profit and bonuses
                </li>
                <li
                  onClick={hendlerOpenReferralProgram}
                  className={`nav_list-item ${
                    isReferralProgram ? "nav_list-item-active" : ""
                  } `}
                >
                  <GiSettingsKnobs />
                  Referral program
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
                  onClick={hendlerOpenPaymant}>
                  <FaMoneyCheckDollar />
                  Paymants
                </li>
                <li className="nav_list-item" onClick={handleLogoutPartner}>
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
              <PartnerDashboard
                hendlerOpenConversions={hendlerOpenConversions}
              />
            )}
            {isProfitAndBonuses && <ProfitAndBonuses />}
            {isReferralProgram && <ReferralProgram />}
            {isProfile && <PartnerProfile />}
            {isPayments && <PaymantParthnerTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPanel;
