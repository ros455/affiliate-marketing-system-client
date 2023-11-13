import { useEffect, useState } from "react";
import Ernings from "../template/Ernings";
import ReferralProgramBanerBlock from "./ReferralProgramBanerBlock";
import ConfirmModal from "../template/ConfirmModal";
import axios from "axios";
import { BASE_URL } from "../../http/BaseUrl";
import { AUTH_TOKEN } from "../../utils/Token";
const ReferralProgram = () => {
  const [isOpenModalConfirmLink, setIsOpenModalConfirmLink] = useState(false);
  const [isOpenModalConfirmCode, setIsOpenModalConfirmCode] = useState(false);
  const [user, setUser] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/get-me`, {
      headers: { authorization: AUTH_TOKEN }
    }).then((res) => {
      console.log('res.data',res.data);
      if(res.data) {
        setUser(res.data)
      }
    }).catch((error) => {
      console.log('error',error);
    })
  },[reloadData])


  const handleChangelink = () => {
    axios.patch(`${BASE_URL}/update-user-link`, {
      id: user?._id
    }).then(() => {
      setReloadData(!reloadData);
    }).catch((error) => {
      console.log('error',error);
    })
  }

  const handleChangeCode = () => {
    axios.patch(`${BASE_URL}/update-user-promo-code`, {
      id: user._id
    }).then(() => {
      setReloadData(!reloadData);
    }).catch((error) => {
      console.log('error',error);
    })
  }
  return (
    <>
      <p className="referral_program_text">Pages / Dashboard</p>
      <h2 className="referral_program_title">Referral program</h2>
      <div className="referral_program_wrapp">
        <div className="referral_program_link_wrapp">
            {user &&
            <Ernings
              isManyText={true}
              img="./image/ernings.svg"
              sum={user?.link}
              title="Link"
              className={"referral_program_link_item"}
            />
            }
          <button 
          className="referral_program_link_btn" 
          type="button" 
          onClick={() => setIsOpenModalConfirmLink(!isOpenModalConfirmLink)}>
            Generate a new link
          </button>
          <ConfirmModal
          title={"You really want generate new link?"}
          isOpenModal={isOpenModalConfirmLink}
          setIsOpen={setIsOpenModalConfirmLink}
          handleChangeFunc={handleChangelink}
          />
        </div>
        <div className="referral_program_link_wrapp">
          {user &&
          <Ernings
            img="./image/ernings.svg"
            sum={user?.promotionalCode}
            title="Promo code"
            className={"referral_program_link_item"}
          />
          }
          <button 
          className="referral_program_link_btn" 
          type="button"
          onClick={() => setIsOpenModalConfirmCode(!isOpenModalConfirmCode)}>
            Generate a new promo code
          </button>
          <ConfirmModal
          title={"You really want generate a new promo code? Your last promo code will be not active."}
          isOpenModal={isOpenModalConfirmCode}
          setIsOpen={setIsOpenModalConfirmCode}
          handleChangeFunc={handleChangeCode}
          />
        </div>
      </div>
      <ReferralProgramBanerBlock/>
    </>
  );
};

export default ReferralProgram;
