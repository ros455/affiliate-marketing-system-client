import { useState } from "react";
import ModalDisplayRequestData from "./ModalDisplayRequestData";
const ListOfWithdrawalsItemmobile = ({ request, setReloadData }) => {
    const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);
    return (
        <>
            <li
              className="partner_table_item"
              onClick={() => setIsOpenModalConfirm(!isOpenModalConfirm)}
            >
              <div className="partner_table_block">
                <p className="partner_table_text">Name</p>
                <p className="partner_table_value">{request?.partner?.name}</p>
              </div>
              <div className="partner_table_block">
                <p className="partner_table_text">Sum</p>
                <p className="partner_table_value">{request?.sum}</p>
              </div>
              <div className="partner_table_block">
                <p className="partner_table_text">Method</p>
                <p className="partner_table_value">{request?.method}</p>
              </div>
              <div className="partner_table_block">
                <p className="partner_table_text">Status</p>
                {request?.status == 'New' && <p className="partner_table_value color_new">{request?.status}</p>}
                {request?.status == 'Successfully' && <p className="partner_table_value color_successfully">{request?.status}</p>}
                {request?.status == 'Cancelled' && <p className="partner_table_value color_cancelled">{request?.status}</p>}
              </div>
              <div className="partner_table_block">
                <p className="partner_table_text">Date</p>
                <p className="partner_table_value">{request?.date}</p>
              </div>
            </li>
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
        </>
    );
  };
  
  export default ListOfWithdrawalsItemmobile;