import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const BurgerButton = ({ activeBurgerButton, setActiveBurgerButton }) => {
  return (
    <button
      className="burger_button"
      type="button"
      onClick={() => setActiveBurgerButton(!activeBurgerButton)}
    >
      {!activeBurgerButton ? <RxHamburgerMenu /> : <AiOutlineClose />}
    </button>
  );
};

export default BurgerButton;
