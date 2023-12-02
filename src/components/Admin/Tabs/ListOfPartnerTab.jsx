import React, {useState, useEffect} from 'react';
import ListOfPartner_List from '../../template/ListOfPartner_List';
const ListOfPartnerTab = () => {
    return (
        <div>
            <h2 className="referral_program_title">List of partner</h2>
            <ListOfPartner_List/>
        </div>
    );
};

export default ListOfPartnerTab;