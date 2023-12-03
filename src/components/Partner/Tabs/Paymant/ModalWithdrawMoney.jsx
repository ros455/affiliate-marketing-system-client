import { useState, useEffect } from "react";
import CustomSelect from "../../../template/CustomSelect";
import { currentUser } from "../../../../store/auth";
import { useSelector } from "react-redux";
import {validationSendRequest} from '../../../../validation/validation.js';
import ErrorMessage from "../../../template/ErrorMessage.jsx";
import { apiInstance } from "../../../../http/Api.js";
const ModalWithdrawMoney = ({ isOpenModal, setIsOpen, setReloadData }) => {
  const [sum, setSum] = useState(0);
  const [comment, setComment] = useState('');
  const [wallet, setWallet] = useState('');
  const [allMethods, setAllMethods] = useState([]);
  const [isOpenSelect, setIsOpenSelect] = useState("");
  const [selectValue, setSelectValue] = useState("USDT TRC20");

  const [sumErrorMessage, setSumErrorMessage] = useState('');
  const [walletErrorMessage, setWalletErrorMessage] = useState('');

  const user = useSelector(currentUser);

  useEffect(() => {
    apiInstance.get(`/get-all-paymants-method`)
      .then((res) => {
        console.log('res.data',res.data);
        setAllMethods(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelect = (name) => {
    setSelectValue(name);
  }

  const choseSavedAddress = () => {
    setWallet(user.walletAddress)
  }

  const sendPaymantRequest = () => {
    let resoult = validationSendRequest({sum, wallet});
    console.log('resoult',resoult);
    let isValid = false;
    if(resoult.length == 0) {
      isValid = true;
    }else {
      resoult.forEach((item) => {
        item.reason == 'sum' && setSumErrorMessage(item?.error);
        item.reason == 'wallet' && setWalletErrorMessage(item?.error);
      })
    }

    if(isValid) {
      apiInstance.post(`/send-paymant-request`, {
        sum,
        comment,
        wallet,
        method: selectValue,
        partnerId: user._id
      })
      .then(() => {
        setReloadData((state) => !state)
        alert('Request sending')
        setIsOpen(!isOpenModal)
      }).catch((error) => {
        console.log('error',error);
      })
    }
  }

  const handleSetSum = (e) => {
    if(e > user.balance || e < 0) {
      setSum(user.balance)
    } else {
      setSum(e)
    }
    if(e == 0) {
      handleValidateSum(e);
    } else {
      setSumErrorMessage('');
    }
  }

  const handleValidateSum = (e) => {
    try {
      console.log('event',e);
      const resoult = validationSendRequest({sum: e});
      console.log('resoult',resoult);
      if(!!resoult.length) {
        resoult.forEach((item) => {
          item.reason == 'sum' ? setSumErrorMessage(item.error) : setSumErrorMessage('');
        })
      } else {
        setSumErrorMessage('');
      }
    } catch(error) {
        console.log(error);
    }
  }

  const handleSetWallet = (e) => {
    setWallet(e)
    if(e.length > 10) {
      handleValidateWallet(e);
    } else {
      setWalletErrorMessage('');
    }
  }

  const handleValidateWallet = (e) => {
    try {
      console.log('event',e);
      const resoult = validationSendRequest({wallet: e});
      console.log('resoult',resoult);
      if(!!resoult.length) {
        resoult.forEach((item) => {
          item.reason == 'sum' ? setWalletErrorMessage(item.error) : setWalletErrorMessage('');
        })
      } else {
        setWalletErrorMessage('');
      }
    } catch(error) {
        console.log(error);
    }
  }

  console.log('sumErrorMessage',sumErrorMessage);
  console.log('walletErrorMessage',walletErrorMessage);
  console.log('allMethods',allMethods);

  return (
    <>
      {isOpenModal && (
        <div className="confirm_modal_wrap">
          <div className="withdraw_money_item_body">
            <div className="withdraw_money_close_wrap">
              <p
                className="withdraw_money_close_text"
                onClick={() => setIsOpen(!isOpenModal)}
              >
                X
              </p>
            </div>
            <div className="withdraw_money_form_wrapper">
              <div className="withdraw_money_form_block_first">
                <div className="input_wraper-item">
                  <label htmlFor="sum">Sum</label>
                  <input
                    id="sum"
                    type="number"
                    placeholder="999"
                    value={sum}
                    onChange={(e) => handleSetSum(e.target.value)}
                  />
                  {/* <p style={{color:"red"}}>{sumErrorMessage}</p> */}
                  <ErrorMessage message={sumErrorMessage}/>
                </div>
                <div className="input_wraper-item">
                  <label htmlFor="comment">Comment</label>
                  <textarea
                    className="textarea_item"
                    id="comment"
                    type="text"
                    placeholder="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <div className="input_wraper-item">
                  <label htmlFor="Wallet address">Wallet address</label>
                  <input
                    id="Wallet address"
                    type="text"
                    placeholder="*************"
                    value={wallet}
                    onChange={(e) => handleSetWallet(e.target.value)}
                  />
                  {/* <p style={{color:"red"}}>{walletErrorMessage}</p> */}
                  <ErrorMessage message={walletErrorMessage}/>
                  <button className="button_approve" onClick={choseSavedAddress}>Chose my saved wallet</button>
                </div>
              </div>
              <div className="withdraw_money_form_block_second">
                <div>
                <CustomSelect
                setIsOpenSelect={setIsOpenSelect}
                isOpenSelect={isOpenSelect}
                allList={allMethods}
                selectValue={selectValue}
                handleSelect={handleSelect}/>
                </div>
                <button className="button_approve" onClick={sendPaymantRequest}>Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWithdrawMoney;
