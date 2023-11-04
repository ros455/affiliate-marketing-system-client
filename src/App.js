import { useEffect } from "react";
import "./App.css";
import RegistrationForm from "./components/Authorization/RegistrationForm";
import LoginForm from "./components/Authorization/LoginForm";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import AdminPanel from "./components/Admin/AdminPanel";
import PartnerPanel from "./components/Partner/PartnerPanel";
import { useSelector } from "react-redux";
import { currentUser } from "./store/auth";
import { useNavigate } from "react-router-dom";
import FirstRequest from "./components/FirstRequest";
import "./style/style-null.css";
import "./style/LoginForm.scss";
import "./style/admin.scss";
import "./style/profile.scss";
import "./style/ListOfPartner.scss";
import "./style/Dasnoard.scss";
import "./style/WeeklyChart.scss";
import "./style/StatisticChart.scss";
import "./style/UserOne.scss";
import "./style/RewardSettings.scss";
import "./style/ProfitAndBonuses.scss";
import "./style/ReferralProgram.scss";
import "./style/StatisticPaginationsButton.scss";
import "./style/DashboardButton.scss";
import "./style/BurgerButton.scss";
import "./style/ConversionTable.scss";
import "./style/PartnerTable.scss";

function App() {
  const user = useSelector(currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.isAdmin) {
      navigate("/admin-panel");
    } else if (user && user.isPartner) {
      navigate("/partner-panel");
    }
  }, [user]);

  // hello oleksandr
  // hello oleksii

  return (
    <div className="App">
      <FirstRequest user={user} />
      <Routes>
        {!user && <Route path="/" element={<LoginForm />} />}
        {!user && <Route path="/registration" element={<RegistrationForm />} />}
        {user && user.isAdmin && (
          <Route path="/admin-panel" element={<AdminPanel />} />
        )}
        {user && user.isPartner && (
          <Route path="/partner-panel" element={<PartnerPanel />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
