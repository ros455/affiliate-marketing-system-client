import React, { useState, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "../../../../http/BaseUrl";
import { AUTH_TOKEN } from "../../../../utils/Token";
const PaymentManagement = () => {
  const [method, setMethod] = useState("");
  const [isOpenSelect, setIsOpenSelect] = useState("");
  const [reload, setReload] = useState("");
  const [allMethods, setAllMethods] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/get-all-paymants-method`)
      .then((res) => {
        setAllMethods(res.data);
        console.log('res.data',res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  const addNewMethod = async () => {
    axios.post(`${BASE_URL}/create-paymant-method`, {
        name: method
    })
    .then(() => {
        setReload(!reload)
        setMethod('')
    }).catch((error) => {
        console.log(error);
    })
  }

  const removeOneMethod = (id) => {
    console.log('id',id);
    axios.delete(`${BASE_URL}/delete-paymant-method`, {
        params: {id}
    }).then(() => {
        setReload(!reload)
    })
    .catch((error) => {
        console.log(error);
    })
  }

  console.log('allMethods',allMethods);
  return (
    <div>
      <div>
      </div>
      <div>
        <p className="title_diferent_components">Added new paymant method</p>
        <div className="input_wraper-item">
          <input
            id="mail"
            type="text"
            placeholder="TRC20"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          />
          <button className="button_approve" onClick={addNewMethod}>Added new method</button>
        </div>
        <p className="title_diferent_components">Paymant method list</p>
        <div className="select_wrap_coin">
          <div className="name_coin">
            <p
              onClick={() => setIsOpenSelect(!isOpenSelect)}
              className="select_header"
            >
              Open list
              <BiDownArrow className={isOpenSelect ? "open_svg" : ""} />
            </p>
          </div>
          <div className={`option_select ${isOpenSelect ? "open" : "close"}`}>
            {allMethods.length != 0 &&
              allMethods.map((el, idx) => (
                <div key={idx} className="coin_list-item-new">
                  <p>{el.name}</p>
                  <p onClick={() => removeOneMethod(el._id)}>X</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement;
