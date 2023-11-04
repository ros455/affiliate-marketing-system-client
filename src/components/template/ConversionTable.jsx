const ConversionTable = ({ conversion }) => {
  return (
    <ul className="conversion_table_list">
      {conversion.length > 0 &&
        conversion.map(({ _id, date, conversion, transitions, buy }) => (
          <li className="conversion_table_item" key={_id}>
            <div className="conversion_table_block">
              <p className="conversion_table_text">Date</p>
              <p className="conversion_table_value">{date}</p>
            </div>
            <div className="conversion_table_block">
              <p className="conversion_table_text">Conversion</p>
              <p className="conversion_table_value">{conversion}</p>
            </div>
            <div className="conversion_table_block">
              <p className="conversion_table_text">Transitions</p>
              <p className="conversion_table_value">{transitions}</p>
            </div>
            <div className="conversion_table_block">
              <p className="conversion_table_text">Buy</p>
              <p className="conversion_table_value">{buy}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ConversionTable;
