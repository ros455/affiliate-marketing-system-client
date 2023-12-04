import React from 'react';
import {BiCopy} from 'react-icons/bi';
// import Alert from './Alert';
const ReferalCodeTemplate = ({ img, title, text, className, isManyText }) => {

    return (
        <div className="ernings_wraper">
            {/* <Alert/> */}
            <div className="ernings_wraper-item admin_panel_items">
                <div onClick={() => {navigator.clipboard.writeText(text)}} className='copy_icon_block'>
                    <BiCopy className='copy_icon'/>
                </div>
                <div className="ernings_wraper-content">
                    <h5 className="content_title">{title}</h5>
                    {isManyText ?
                        <p className={`curent_sum ${className}`} style={{ fontSize: '12px' }}>{text}</p> :
                        <p className={`curent_sum ${className}`}>{text}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ReferalCodeTemplate;
