import React, { useEffect, useState } from 'react';
import Ernings from '../template/Ernings'; 
import BalanceSalesCom from '../template/BalanceSalesCom';
import DashboardPrtnerList from './DashboardPrtnerList';
import WeeklyChart from '../template/WeeklyChart';
// import PartnerMini from './PartnerMini';
// import TiketsMini from './TiketsMini';
const DashboardWrap = ({hendlerOpenListOfPartner}) => {
    return (
        <div className='admin_content_wrap'>
            <h2>Main Dashboard</h2>
            <div className='erning_sales_info_wrap'>
            <Ernings
                img = './image/ernings.svg'
                sum = '350$'
                title = 'Ernings'
            />
            <Ernings
                img = './image/month.svg'
                sum = '642$'
                title = 'Spend this month'
            />
            <BalanceSalesCom
                title = 'Sales'
                sum = '574$'
                isSales = {true}
            />
            <BalanceSalesCom
                title = 'Your balance'
                sum = '1000$'
                isSales = {false}
            />
            </div>
            <div className='dasboard_user_list_and_chart_wrap'>
                <div className='dasboard_user_list'>
                <DashboardPrtnerList hendlerOpenListOfPartner={hendlerOpenListOfPartner}/>
                </div>
                <div style={{width:'40%'}}>
            <WeeklyChart/>
                </div>
            </div>
            {/* <div className='partner_info_wrap'>
                <PartnerMini/>
                <TiketsMini/>
            </div> */}

        </div>
    );
};

export default DashboardWrap;