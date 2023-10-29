import React, { useEffect, useState } from 'react';
import {BsThreeDots} from 'react-icons/bs';
const DashboardConversionList = ({hendlerOpenConversions}) => {
    const [conversion] = useState([
        {
            _id: '1',
            date: '24.10.2023',
            conversion: '17.4%',
            transitions:'743',
            buy:'42'
        },
        {
            _id: '2',
            date: '25.10.2023',
            conversion: '25.6%',
            transitions:'1200',
            buy:'91'
        },
        {
            _id: '3',
            date: '26.10.2023',
            conversion: '12.1',
            transitions:'650',
            buy:'36'
        },
        {
            _id: '4',
            date: '27.10.2023',
            conversion: '19.3%',
            transitions:'1300',
            buy:'53'
        },
        {
            _id: '5',
            date: '28.10.2023',
            conversion: '7.8%',
            transitions:'951',
            buy:'18'
        },
    ]);

    return (
        <div className='admin_panel_items derection_wraper' >
            <div className='dashboard_list_header'>
            <h3 className='dashboard_list_title'>Statistic</h3>
            <div className='dashboard_list_three_dot_block'>
                <BsThreeDots 
                onClick={() => hendlerOpenConversions()}
                className='dashboard_list_three_dot_icon'/>
            </div>
            </div>
            <div className='derection_table_wrap'>
                <div className='table_header'>
                    <p className='colum colum_name'>Date</p>
                    <p className='colum '>Conversion</p>
                    <p className='colum '>Transitions</p>
                    <p className='colum '>Sales</p>
                </div>
                <div className='table_body'>
                    {!!conversion.length && conversion.map((item) => (
                    <div className='table_info_item' key={item._id}> 
                        <p className='colum row colum_name'>{item.date}</p>
                        <p className='colum row colum_progres'>{item.conversion}</p>
                        <p className='colum row colum_quantity'>{item.transitions}</p>
                        <p className='colum row colum_data'>{item.buy}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardConversionList;