const PartnerTable = ({ partner, rewards, handlerActiveUser }) => {
  return (
    <ul className="partner_table_list">
      {partner.length > 0 &&
        partner.map((user) => (
          <li
            onClick={handlerActiveUser ? () => handlerActiveUser(user) : null}
            className="partner_table_item"
            key={user._id}
          >
            <div className="partner_table_block">
              <p className="partner_table_text">Name</p>
              <p className="partner_table_value">{user?.name}</p>
            </div>
            <div className="partner_table_block">
              <p className="partner_table_text">Email</p>
              <p className="partner_table_value">{user?.email}</p>
            </div>
            <div className="partner_table_block">
              <p className="partner_table_text">Transitions</p>
              <p className="partner_table_value">{user?.statistics?.clicksAllPeriod}</p>
            </div>
            <div className="partner_table_block">
              <p className="partner_table_text">Sales</p>
              <p className="partner_table_value">{user?.statistics?.buysAllPeriod}</p>
            </div>
            {rewards && (
              <div className="partner_table_block">
                <p className="partner_table_text">Rewards</p>
                <p className="partner_table_value">{user?.bonus}</p>
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default PartnerTable;
