import React from 'react';
import {BiCopy} from 'react-icons/bi';
// import Alert from './Alert';
const ReferalCodeTemplate = ({ img, title, text, className, isManyText }) => {

    const handleImageClick = () => {
        window.navigator.clipboard.writeText(text)
            .then(() => {
                // Handle success (optional)
            })
            .catch(err => {
                // Handle errors (optional)
                console.error('Could not copy text: ', err);
            });
    }

    return (
        <div className="ernings_wraper">
            {/* <Alert/> */}
            <div className="ernings_wraper-item admin_panel_items">
                <div onClick={handleImageClick} className='copy_icon_block'>
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
