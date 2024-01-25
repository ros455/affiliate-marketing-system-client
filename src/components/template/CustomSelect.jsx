import React from 'react';
import { BiDownArrow } from "react-icons/bi";
const CustomSelect = ({setIsOpenSelect, isOpenSelect, allList, selectValue, handleSelect}) => {
    return (
        <div className="select_wrap_coin">
        <div className="name_coin">
          <p
            onClick={() => setIsOpenSelect(!isOpenSelect)}
            className="select_header"
          >
            {selectValue}
            <BiDownArrow className={isOpenSelect ? "open_svg" : ""} />
          </p>
        </div>
        <div className={`option_select ${isOpenSelect ? "open" : "close"}`}>
          {allList.length != 0 &&
            allList.map((el, idx) => (
              <div key={idx} className="coin_list-item-new">
                <p onClick={() => handleSelect(el.name)}>{el.name}</p>
              </div>
            ))}
        </div>
      </div>
    );
};

export default CustomSelect;