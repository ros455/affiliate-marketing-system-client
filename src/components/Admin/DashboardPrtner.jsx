import React from 'react';

const DashboardPrtner = () => {
    return (
        <div className='admin_panel_items derection_wraper' >
            <h3 className='admin_panel_items-title'>Direction</h3>
            <div className='derection_table_wrap'>
                <div className='table_header'>
                    <p className='colum colum_name'>Name</p>
                    <p className='colum '>Progres</p>
                    <p className='colum '>Quantity</p>
                    <p className='colum '>Data</p>
                </div>
                <div className='table_body'>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name'>Kyiv \ Warszawa</p>
                        <p className='colum row colum_progres'> 55%</p>
                        <p className='colum row colum_quantity'> 15 pcs</p>
                        <p className='colum row colum_data'>22.Sept.2023</p>
                    </div>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name'>Kyiv \ Bratislava</p>
                        <p className='colum row colum_progres'> 25%</p>
                        <p className='colum row colum_quantity'> 7 pcs</p>
                        <p className='colum row colum_data'>22.Aug.2023</p>
                    </div>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name'>Kyiv \ Warszawa</p>
                        <p className='colum row colum_progres'> 55%</p>
                        <p className='colum row colum_quantity'> 15 pcs</p>
                        <p className='colum row colum_data'>22.Sept.2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPrtner;