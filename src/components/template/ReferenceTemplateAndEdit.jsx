import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { SlClose } from "react-icons/sl";
import { apiInstance } from "../../http/Api";
const ErningsAndEdit = ({ img, title, link, className, text, url, setReloadData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [valueText, setValueText] = useState('');
  const [valueLink, setValueLink] = useState('');

  useEffect(() => {
    setValueText(text);
    setValueLink(link);
  },[text, link])

  const handelUpdateBalance = () => {
    apiInstance.patch(url, {
      valueText,
      valueLink
    }).then(() => {
      setIsEdit(!isEdit);
      setReloadData((state) => !state)
    }).catch((error) => {
      console.log('error',error);
    })
  }

  return (
    <div className="edit_ernings_wraper reference_template_wrap">
      <div className="ernings_wraper">
        <div className="ernings_wraper-item admin_panel_items">
          <div className="reference_template_icon_wrap">{img}</div>
          <div className="ernings_wraper-content">
            <h5 className="content_title">{title}</h5>
            <a target="_blank" className={`curent_sum ${className}`} href={link}>
              {text}
            </a>
          </div>
        </div>
      </div>
      <div>
        {!isEdit ? (
          <div className="ernings_withdraw_money_wrap">
            <MdEdit
              className="ernings_withdraw_money_icon"
              onClick={() => setIsEdit(!isEdit)}
            />
          </div>
        ) : (
          <div>
            <div className="reference_template_input_wrap">
              <input
                className="reference_template_input"
                value={valueText}
                onChange={(e) => setValueText(e.target.value)}
                type="text"
              />
            </div>
            <div className="reference_template_input_wrap">
              <input
                className="reference_template_input"
                value={valueLink}
                onChange={(e) => setValueLink(e.target.value)}
                type="text"
              />
            </div>
            <div className="reference_template_buttons_wrap">
            <div className="ernings_withdraw_money_wrap">
                <SlClose
                  className="ernings_withdraw_money_icon"
                  onClick={() => setIsEdit(!isEdit)}
                />
              </div>
              <div className="ernings_withdraw_money_wrap">
                <FaCheckCircle
                  className="ernings_withdraw_money_icon"
                  onClick={handelUpdateBalance}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErningsAndEdit;

