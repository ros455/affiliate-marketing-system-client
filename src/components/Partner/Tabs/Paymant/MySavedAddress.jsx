import React, { useState, useEffect } from "react";
import { currentUser } from "../../../../store/auth";
import { useSelector } from "react-redux";
import { apiInstance } from "../../../../http/Api";
const MySavedAddress = () => {
  const [method, setMethod] = useState("");
  const [reload, setReload] = useState("");

  const user = useSelector(currentUser);

  useEffect(() => {
    setMethod(user.walletAddress)
  }, []);

  const updateAddress = async () => {
    apiInstance.patch(`/update-wallet-address`, {
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
