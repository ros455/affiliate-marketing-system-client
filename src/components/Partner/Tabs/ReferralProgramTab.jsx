import { useEffect, useState } from "react";
// import ReferralProgramBanerBlock from "../ReferralProgramBanerBlock";
import ConfirmModal from "../../template/ConfirmModal";
import ReferalCodeTemplate from "../../template/ReferalCodeTemplate";
import { BASE_URL } from "../../../http/BaseUrl";
import { apiInstance } from "../../../http/Api";
const ReferralProgramTab = () => {
  const [isOpenModalConfirmLink, setIsOpenModalConfirmLink] = useState(false);
  const [isOpenModalConfirmCode, setIsOpenModalConfirmCode] = useState(false);
  const [user, setUser] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    apiInstance.get(`/get-me`)
    .then((res) => {
      if(res.data) {
        setUser(res.data)
      }
    }).catch((error) => {
      console.log('error',error);
    })
  },[reloadData])


  const handleChangelink = () => {
    apiInstance.patch(`/update-user-link`, {
      id: user?._id
    }).then(() => {
      setReloadData(!reloadData);
    }).catch((error) => {
      console.log('error',error);
    })
  }

  const handleChangeCode = () => {
    apiInstance.patch(`/update-user-promo-code`, {
      id: user._id
    }).then(() => {
      setReloadData(!reloadData);
    }).catch((error) => {
      console.log('error',error);
    })
  }
  return (
    <>
      <h2 className="referral_program_title">Referral program</h2>
      <div className="referral_program_wrapp">
        <div className="referral_program_link_wrapp">
            {user &&
            <ReferalCodeTemplate
              isManyText={true}
              img="./image/ernings.svg"
              text={`${BASE_URL}/click?link=${user?.link}`}
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
          <ReferalCodeTemplate
            img="./image/ernings.svg"
            text={user?.promotionalCode}
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
      {/* <ReferralProgramBanerBlock/> */}
    </>
  );
};

export default ReferralProgramTab;
