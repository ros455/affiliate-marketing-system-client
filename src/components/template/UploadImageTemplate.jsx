import React, {useRef} from 'react';
import {FaDownload} from 'react-icons/fa';
import axios from 'axios';
import { BASE_URL } from '../../http/BaseUrl';
const UploadImageTemplate = () => {
    const bigRef = useRef(null);
    const middleRef = useRef(null);
    const smallRef = useRef(null);

    const handleBigBaner = (e) => {
        if (e) {
            const formData = new FormData();
            formData.append("BigBanner", e.target.files[0]);
            axios.patch(`${BASE_URL}/upload-big-baner`,formData).then(() => {
                alert('Baner added')
            }).catch((error) => {
                console.log('error',error);
            })
        }
    }

    const handleMiddleBaner = (e) => {
        if (e) {
            const formData = new FormData();
            formData.append("MiddleBanner", e.target.files[0]);
            axios.patch(`${BASE_URL}/upload-middle-baner`,formData).then(() => {
                alert('Baner added')
            }).catch((error) => {
                console.log('error',error);
            })
        }
    }

    const handleSmallBaner = (e) => {
        if (e) {
            const formData = new FormData();
            formData.append("SmallBanner", e.target.files[0]);
            axios.patch(`${BASE_URL}/upload-small-baner`,formData).then(() => {
                alert('Baner added')
            }).catch((error) => {
                console.log('error',error);
            })
        }
    }
    return (
        <div className="upload_baner_wrap">
        <div className="ernings_baner_wrap">
          <div className=".ernings_wraper_baner-item admin_panel_items">
          <img src="./image/ion_image-sharp.svg" alt=""/>
          <div className="ernings_wraper-content">
          <h5 className="content_title">Upload baner</h5>
          </div>
          </div>
        </div>
        <input
          type="file"
          name="img"
          onChange={handleBigBaner}
          ref={bigRef}
          hidden
        />
        <div className='upload_baner-baner_section'>
        <div className='baner_section_text'>600 x 240</div>
        <div className='baner_section_icon_wrap'>
            <FaDownload className='upload_baner_icon' onClick={() => bigRef.current.click()}/>
        </div>
        </div>
        <input
          type="file"
          name="img"
          onChange={handleMiddleBaner}
          ref={middleRef}
          hidden
        />
        <div className='upload_baner-baner_section'>
        <div className='baner_section_text'>600 x 150</div>
        <div className='baner_section_icon_wrap'>
            <FaDownload className='upload_baner_icon' onClick={() => middleRef.current.click()}/>
        </div>
        </div>
        <input
          type="file"
          name="img"
          onChange={handleSmallBaner}
          ref={smallRef}
          hidden
        />
        <div className='upload_baner-baner_section'>
        <div className='baner_section_text'>600 x 120</div>
        <div className='baner_section_icon_wrap'>
            <FaDownload className='upload_baner_icon' onClick={() => smallRef.current.click()}/>
        </div>
        </div>
      </div>
    );
};

export default UploadImageTemplate;