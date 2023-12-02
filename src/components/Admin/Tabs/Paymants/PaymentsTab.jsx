import React, {useState} from 'react';
import ListOfWithdrawals from './ListOfWithdrawals';
import PaymentManagement from './PaymentManagement';
const PaymentsTab = () => {
    return (
        <div>
            <h2 className="referral_program_title">Payments</h2>
            <ListOfWithdrawals/>
            <PaymentManagement/>
        </div>
    );
};

export default PaymentsTab;