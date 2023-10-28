import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { allUsers } from '../../store/auth';
const ListOfPartner_List = () => {
    const allUser = useSelector(allUsers);

    console.log('allUser',allUser);
    return (
        <div>
            <div className='list_of_partner_title'>Partners</div>
            <div className='list_of_partner_table_title'>
                <div className='list_of_partner_table_title_item'>Name</div>
                <div className='list_of_partner_table_title_item'>Conversion</div>
                <div className='list_of_partner_table_title_item'>Transitions</div>
                <div className='list_of_partner_table_title_item'>Sales</div>
            </div>
            {allUser && allUser.map((user) => (
            <div className='list_of_partner_table_title' key={user._id}>
            <div className='list_of_partner_table_data_item'>{user.name}</div>
            <div className='list_of_partner_table_data_item'>2</div>
            <div className='list_of_partner_table_data_item'>3</div>
            <div className='list_of_partner_table_data_item'>4</div>
            </div>
            ))}
        </div>
    );
};

export default ListOfPartner_List;