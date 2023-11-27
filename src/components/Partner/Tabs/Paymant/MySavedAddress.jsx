import React, { useState, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "../../../../http/BaseUrl";
import { AUTH_TOKEN } from "../../../../utils/Token";
import { currentUser } from "../../../../store/auth";
import { useSelector } from "react-redux";
const MySavedAddress = () => {
  const [method, setMethod] = useState("");
  const [isOpenSelect, setIsOpenSelect] = useState("");
  const [reload, setReload] = useState("");

  const user = useSelector(currentUser);

  useEffect(() => {
    setMethod(user.walletAddress)
  }, []);

  const updateAddress = async () => {
    axios.patch(`${BASE_URL}/update-wallet-address`, {
      address: method,
      id: user._id
    })
    .then(() => {
        setReload(!reload)
        alert('address updated')
        // setMethod('')
    }).catch((error) => {
        console.log(error);
    })
  }


  // console.log('allMethods',allMethods);
  return (
    <div>
      <div>
        <div className="input_wraper-item">
          <input
            id="mail"
            type="text"
            placeholder="Your address"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          />
          <button className="button_approve" onClick={updateAddress}>Saved address</button>
        </div>
      </div>
    </div>
  );
};

export default MySavedAddress;
