import React, { useEffect, useState } from 'react';

const BalanceSalesCom = ({isSales, sum , title}) => {

    const [isProfit, setIsProfit] = useState(true)


    return (
        <div className='ernings_wraper'>
            <div className='ernings_wraper-item admin_panel_items'>
                <div className='ernings_wraper-content'>
                    <h5 className='content_title'>{title}</h5>
                    <p className='curent_sum'>{sum}</p>
                    {isSales && 
                        <p className='percent_relative'> <span className={`curent_percent ${isProfit ? 'curent_percent_profit' : 'curent_percent_loss'}`} >+23%</span>  since last month</p>
                    }
                </div> 
            </div>
        </div>
    );
};

export default BalanceSalesCom;