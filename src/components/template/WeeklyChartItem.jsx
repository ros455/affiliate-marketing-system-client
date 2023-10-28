import React from 'react';

const WeeklyChartItem = ({chart}) => {
    return (
        <div className='weekly_chart_item_block'>
        <div 
        className='weekly_chart_item'
        style={{height: `${chart.procent}`}}></div>
    </div>
    );
};

export default WeeklyChartItem;