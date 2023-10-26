import React, { useEffect, useState } from 'react';
import Ernings from '../template/Ernings'; 
import BalanceSalesCom from '../template/BalanceSalesCom';
// import DashboardPrtner from './DashboardPrtner';
import WeeklyChart from '../template/WeeklyChart';

const PartnerDashboard = () => {
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
            <div style={{display:'flex'}}>
                <div style={{width: '60%'}}>
                {/* <DashboardPrtner/> */}
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

export default PartnerDashboard;