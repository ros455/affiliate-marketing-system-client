import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../http/BaseUrl';
import { AUTH_TOKEN } from '../../../utils/Token';
import ListOfPartner_List from '../../template/ListOfPartner_List';
const ListOfPartnerTab = () => {
    return (
        <div>
            <ListOfPartner_List/>
        </div>
    );
};

export default ListOfPartnerTab;