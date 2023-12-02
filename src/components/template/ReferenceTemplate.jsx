import React, { useEffect, useState } from "react";

const ReferenceTemplate = ({ img, title, link, className, text }) => {
  return (
    <div className="ernings_wraper reference_template_wrap">
      <div className="ernings_wraper-item admin_panel_items">
        <div className="reference_template_icon_wrap">
            {img}
        </div>
        <div className="ernings_wraper-content">
          <h5 className="content_title">{title}</h5>
          <a className={`curent_sum ${className}`} href={link}>{text}</a>
        </div>
      </div>
    </div>
  );
};

export default ReferenceTemplate;
