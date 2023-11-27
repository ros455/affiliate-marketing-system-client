import React, {useState} from 'react';
import ListOfWithdrawals from './ListOfWithdrawals';
import PaymentManagement from './PaymentManagement';
const PaymentsTab = () => {
    return (
        <div>
            <ListOfWithdrawals/>
            <PaymentManagement/>
        </div>
    );
};

export default PaymentsTab;