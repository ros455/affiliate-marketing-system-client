
const HistoryTransactionsItemMobile = ({ request }) => {
    return (
            <li
              className="partner_table_item"
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
    );
  };
  
  export default HistoryTransactionsItemMobile;