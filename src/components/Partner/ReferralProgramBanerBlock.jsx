import React, {useEffect, useState} from 'react';
import { BASE_URL } from '../../http/BaseUrl';
import { apiInstance } from '../../http/Api';
const ReferralProgramBanerBlock = () => {
  const [bigBanner, setBigBanner] = useState('');
  const [middleBanner, setMiddleBanner] = useState('');
  const [smallBanner, setSmallBanner] = useState('');
  useEffect(() => {
    apiInstance.get(`/get-all-banners`).then((res) => {
      if(res.data) {
        setBigBanner(`${BASE_URL}${res.data.BigBanner}`);
        setMiddleBanner(`${BASE_URL}${res.data.MiddleBanner}`);
        setSmallBanner(`${BASE_URL}${res.data.SmallBanner}`);
      }
    }).catch((error) => {
      console.log('error',error);
    })
  },[])

  const dowladBigBanner = async () => {
    try {
      const resonse = await apiInstance.get(`/download-big-banner`);
      if (resonse.status == 200) {
        const link = document.createElement("a");
        link.href = `${BASE_URL}/download-big-banner`;
        document.body.appendChild(link);
        link.click();
      }
    }catch(error) {
      console.log('error',error);
    }
  }

  const dowladMiddleBanner = async () => {
    try {
      const resonse = await apiInstance.get(`/download-middle-banner`);

      if (resonse.status == 200) {
        const link = document.createElement("a");
        link.href = `${BASE_URL}/download-middle-banner`;
        document.body.appendChild(link);
        link.click();
      }
    }catch(error) {
      console.log('error',error);
    }
  }

  const dowladSmallBanner = async () => {
    try {
      const resonse = await apiInstance.get(`/download-small-banner`);

      if (resonse.status == 200) {
        const link = document.createElement("a");
        link.href = `${BASE_URL}/download-small-banner`;
        document.body.appendChild(link);
        link.click();
      }
    }catch(error) {
      console.log('error',error);
    }
  }

    return (
        <div className="referral_program_img_wrapp">
          <div className="referral_program_img_block">
            <div className='referral_program_content_wrap'>
            <p className="referral_program_img_text">Link to the big banner</p>
            <p className="referral_program_img_text" onClick={dowladBigBanner}>Download</p>
            </div>
          <img
            className="referral_program_img"
            src={bigBanner}
            alt="Big banner"
          />
        </div>
        <div className="referral_program_img_block">
        <div className='referral_program_content_wrap'>
            <p className="referral_program_img_text">Link to the average banner</p>
            <p className="referral_program_img_text" onClick={dowladMiddleBanner}>Download</p>
            </div>
          <img
            className="referral_program_img"
            src={middleBanner}
            alt="Middle banner"
          />
        </div>
        <div className="referral_program_img_block">
        <div className='referral_program_content_wrap'>
            <p className="referral_program_img_text">Link to the small banner</p>
            <p className="referral_program_img_text" onClick={dowladSmallBanner}>Download</p>
            </div>
          <img
            className="referral_program_img"
            src={smallBanner}
            alt="Small banner"
          />
        </div>
      </div>
    );
};

export default ReferralProgramBanerBlock;