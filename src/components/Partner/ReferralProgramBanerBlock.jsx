import React from 'react';

const ReferralProgramBanerBlock = () => {
    return (
        <div className="referral_program_img_wrapp">
        <div className="referral_program_img_block">
          <p className="referral_program_img_text">Link 600 x 240</p>
          <img
            className="referral_program_img"
            src="./image/referral_program_img_xl.png"
            alt="link"
          />
        </div>
        <div className="referral_program_img_block">
          <p className="referral_program_img_text">Link 600 x 150</p>
          <img
            className="referral_program_img"
            src="./image/referral_program_img_md.png"
            alt="link"
          />
        </div>
        <div className="referral_program_img_block">
          <p className="referral_program_img_text">Link 300 x 120</p>
          <img
            className="referral_program_img"
            src="./image/referral_program_img_sm.png"
            alt="link"
          />
        </div>
      </div>
    );
};

export default ReferralProgramBanerBlock;