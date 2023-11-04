import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const PaginationsButton = ({ scrollRef }) => {
  const handleScroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="pagination_wrap">
      <div className="pagination_block">
        <div className="pagination_buttons_block">
          <button
            className="pagination_button_item"
            onClick={() => handleScroll(-20)}
          >
            <AiOutlineLeft /> Prev
          </button>
          <p className="pagination_current_page">{}</p>
          <button
            className="pagination_button_item"
            onClick={() => handleScroll(20)}
          >
            Next <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationsButton;
