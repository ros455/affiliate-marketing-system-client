import React, { useEffect, useState } from 'react';
import { TbEdit } from "react-icons/tb";
import ModalDisplayRequestData from './ModalDisplayRequestData';
const ListOfWithdrawalsItem = ({request, setReloadData}) => {
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);
    return (
        <div className="table_info_item" onClick={() => setIsOpenModalConfirm(!isOpenModalConfirm)}>
        <p className="colum row colum_name">{request?.partner?.name}</p>
        <p className="colum row colum_progres">{request?.sum}$</p>
        <p className="colum row colum_quantity">{request?.method}</p>
        {request?.status == 'New' && <p className="colum row colum_data color_new">{request?.status}</p>}
        {request?.status == 'Successfully' && <p className="colum row colum_data color_successfully">{request?.status}</p>}
        {request?.status == 'Cancelled' && <p className="colum row colum_data color_cancelled">{request?.status}</p>}
        
        <p className="colum row colum_data">{request?.date}</p>
        {isOpenModalConfirm &&
            <ModalDisplayRequestData
              isOpenModal={isOpenModalConfirm}
              setIsOpen={setIsOpenModalConfirm}
              user={request?.partner}
              sum={request?.sum}
              method={request?.method}
              comment={request?.comment}
              date={request?.date}
              wallet={request?.wallet}
              requestId = {request._id}
              setReloadData={setReloadData}
            />
            }
      </div>
    );
};

export default ListOfWithdrawalsItem;