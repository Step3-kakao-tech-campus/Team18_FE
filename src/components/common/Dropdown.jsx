import PropTypes, { string } from "prop-types";
import { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 로직 추가 시 이 부분을 수정하세요.
  const handleClickOption = (option) => {
    onSelectedChange(option);
    setIsOpen(false);
  };

  return (
    <div className="w-[12rem] color-green-900">
      <div
        className="flex w-full border-t-2 border-solid p-4 justify-between items-center border-green-700 font-semibold"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selected}</span>
        <span className="material-symbols-outlined"> expand_more </span>
      </div>
      {isOpen ? (
        <div className="flex flex-col gap-2 bg-green-100 w-full text-sm">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleClickOption(option)}
              className="h-9"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(string),
  selected: PropTypes.string,
  onSelectedChange: PropTypes.func,
};

export default Dropdown;
