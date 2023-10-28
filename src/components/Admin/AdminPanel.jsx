import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardWrap from './DashboardWrap';
import ListOfPartner from './ListOfPartner';
import AdvancedStatistics from './AdvancedStatistics';
import RewardSettings from './RewardSettings';
import Profile from './Profile';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { allUsers } from '../../store/auth';
import { AiFillHome } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BiLogOut, BiSolidBarChartAlt2 } from 'react-icons/bi';
import { BsCart2, BsFillPersonFill } from 'react-icons/bs';

const AdminPanel = () => {
    const [isDashboadr, setIsDashboadr] = useState(true)
    const [isListOfPartner, setIsListOfPartner] = useState(false)
    const [isAdvancedStatistics, setIsAdvancedStatistics] = useState(false)
    const [isRewardSettings, setIsRewardSettings] = useState(false)
    const [isProfile, setIsProfile] = useState(false)

    const navigate = useNavigate();

    const hendlerOpenDashboadr = () => {
        setIsDashboadr(true)
        setIsListOfPartner(false)
        setIsAdvancedStatistics(false)
        setIsRewardSettings(false)
        setIsProfile(false)
    }
    const hendlerOpenListOfPartner = () => {
        setIsDashboadr(false)
        setIsListOfPartner(true)
        setIsAdvancedStatistics(false)
        setIsRewardSettings(false)
        setIsProfile(false)
    }
    const hendlerOpenAdvancedStatistics = () => {
        setIsDashboadr(false)
        setIsListOfPartner(false)
        setIsAdvancedStatistics(true)
        setIsRewardSettings(false)
        setIsProfile(false)
    }
    const hendlerOpenRewardSettings = () => {
        setIsDashboadr(false)
        setIsListOfPartner(false)
        setIsAdvancedStatistics(false)
        setIsRewardSettings(true)
        setIsProfile(false)
    }
    const hendlerOpenProfile = () => {
        setIsDashboadr(false)
        setIsListOfPartner(false)
        setIsAdvancedStatistics(false)
        setIsRewardSettings(false)
        setIsProfile(true)
    }

    const logoutAdministration = () => {
        window.localStorage.removeItem('A-M-S-token');
        navigate('/');
        setTimeout(() => {
            window.location.reload();
        },1000)
    }

    return (
        <div className='admin_panel_wraper'>
            <div className='admin_panel'>
                <aside className='admin_panel_aside-menu'>
                    <p className='logo_admin'>Bus <span>Logo</span></p>
                    <nav className='admin_panel_nav-bar'>
                        <ul className='nav_list'>
                            <li 
                            onClick={hendlerOpenDashboadr}
                            className={`nav_list-item ${isDashboadr ? 'nav_list-item-active' : ''} `}><AiFillHome/>Dashboard</li>
                            <li 
                            onClick={hendlerOpenListOfPartner}
                            className={`nav_list-item ${isListOfPartner ? 'nav_list-item-active' : ''} `}><BsCart2 />List of partners</li>
                            <li 
                            onClick={hendlerOpenAdvancedStatistics}
                            className={`nav_list-item ${isAdvancedStatistics ? 'nav_list-item-active' : ''} `}><BiSolidBarChartAlt2/>Advanced statistics</li>
                            <li 
                            onClick={hendlerOpenRewardSettings}
                            className={`nav_list-item ${isRewardSettings ? 'nav_list-item-active' : ''} `}>
                                <GiSettingsKnobs/>Reward settings</li>
                            <li 
                            onClick={hendlerOpenProfile}
                            className={`nav_list-item ${isProfile ? 'nav_list-item-active' : ''} `}
                            ><BsFillPersonFill/>Profile</li>
                            <li className='nav_list-item' onClick={logoutAdministration}><BiLogOut/>Log Out</li>
                        </ul>
                    </nav>
                </aside>
                <div className='admin_panel_content-wraper'>
                    <div className='title_body'>
                        {isDashboadr && 
                        <DashboardWrap hendlerOpenListOfPartner={hendlerOpenListOfPartner}/>
                        }
                        {isListOfPartner && 
                            <ListOfPartner/>
                        }
                        {isAdvancedStatistics && 
                            <AdvancedStatistics/>  
                        }
                        {isRewardSettings && 
                             <RewardSettings/>
                        }
                        {isProfile && 
                            <Profile/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;