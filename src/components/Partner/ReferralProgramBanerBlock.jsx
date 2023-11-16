import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../../http/BaseUrl';
const ReferralProgramBanerBlock = () => {
  const [bigBanner, setBigBanner] = useState('');
  const [middleBanner, setMiddleBanner] = useState('');
  const [smallBanner, setSmallBanner] = useState('');
  useEffect(() => {
    axios.get(`${BASE_URL}/get-all-banners`).then((res) => {
      if(res.data) {
        setBigBanner(res.data.BigBanner);
        setMiddleBanner(res.data.MiddleBanner);
        setSmallBanner(res.data.SmallBanner);
      }
    }).catch((error) => {
      console.log('error',error);
    })
  },[])

  const dowladBigBanner = async () => {
    try {
      const resonse = await axios.get(`${BASE_URL}/download-big-banner`);
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
      const resonse = await axios.get(`${BASE_URL}/download-middle-banner`);

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
      const resonse = await axios.get(`${BASE_URL}/download-small-banner`);

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
            <p className="referral_program_img_text">Link 600 x 240</p>
            <p className="referral_program_img_text" onClick={dowladBigBanner}>Dowload</p>
            </div>
          <img
            className="referral_program_img"
            src={`${BASE_URL}${bigBanner}`}
            alt="Big banner"
          />
        </div>
        <div className="referral_program_img_block">
        <div className='referral_program_content_wrap'>
            <p className="referral_program_img_text">Link 600 x 150</p>
            <p className="referral_program_img_text" onClick={dowladMiddleBanner}>Dowload</p>
            </div>
          <img
            className="referral_program_img"
            src={`${BASE_URL}${middleBanner}`}
            alt="Middle banner"
          />
        </div>
        <div className="referral_program_img_block">
        <div className='referral_program_content_wrap'>
            <p className="referral_program_img_text">Link 300 x 120</p>
            <p className="referral_program_img_text" onClick={dowladSmallBanner}>Dowload</p>
            </div>
          <img
            className="referral_program_img"
            src={`${BASE_URL}${smallBanner}`}
            alt="Small banner"
          />
        </div>
      </div>
    );
};

export default ReferralProgramBanerBlock;