import React from 'react';
import EditUserProfileData from '../../template/EditUserProfileData';
const ProfileTab = () => {
    return (
        <div>
            <EditUserProfileData updateDataUrl='update-user-data'/>
        </div>
    );
};

export default ProfileTab;