import Ernings from "../template/Ernings";

const ReferralProgram = () => {
  return (
    <>
      <p className="referral_program_text">Pages / Dashboard</p>
      <h2 className="referral_program_title">Referral program</h2>
      <div className="referral_program_wrapp">
        <div className="referral_program_link_wrapp">
          <a
            href="asfzjxpoAASFAJSzxcaso.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Ernings
              img="./image/ernings.svg"
              sum="asfzjxpoAASFAJSzxcaso.com"
              title="Link"
              className={"referral_program_link_item"}
            />
          </a>
          <button className="referral_program_link_btn" type="button">
            Generate a new link
          </button>
        </div>
        <div className="referral_program_link_wrapp">
          <Ernings
            img="./image/ernings.svg"
            sum="asfoAFAJSzx"
            title="Promo code"
            className={"referral_program_link_item"}
          />
          <button className="referral_program_link_btn" type="button">
            Generate a new promo code
          </button>
        </div>
      </div>
      <div className="referral_program_img_wrapp">
        <div className="referral_program_img_block">
          <p className="referral_program_img_text">Link 600 x 240</p>
          <img
            className="referral_program_img"
            src="./image/referral_program_img_xl.png"
            alt="link"
          />
        </div>
        <div className="referral_program_img_block">
          <p className="referral_program_img_text">Link 600 x 150</p>
          <img
            className="referral_program_img"
            src="./image/referral_program_img_md.png"
            alt="link"
          />
        </div>
        <div className="referral_program_img_block">
          <p className="referral_program_img_text">Link 300 x 120</p>
          <img
            className="referral_program_img"
            src="./image/referral_program_img_sm.png"
            alt="link"
          />
        </div>
      </div>
    </>
  );
};

export default ReferralProgram;
