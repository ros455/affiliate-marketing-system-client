import React, { useEffect, useState } from "react";

const Ernings = ({ img, title, sum, className, isManyText }) => {
  return (
    <div className="ernings_wraper">
      <div className="ernings_wraper-item admin_panel_items">
        <img src={img} alt="" />
        <div className="ernings_wraper-content">
          <h5 className="content_title">{title}</h5>
          {isManyText 
          ?
          <p 
          className={`curent_sum ${className}`}
          style={{fontSize: '12px'}}>{sum}</p>
          :
          <p className={`curent_sum ${className}`}>{sum}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Ernings;
