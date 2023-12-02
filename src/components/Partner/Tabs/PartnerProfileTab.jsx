import React from 'react';
import EditUserProfileData from '../../template/EditUserProfileData';
const PartnerProfileTab = () => {
    return (
        <div>
            <h2 className="referral_program_title">Profile</h2>
            <EditUserProfileData updateDataUrl='update-user-data'/>
        </div>
    );
};

export default PartnerProfileTab;