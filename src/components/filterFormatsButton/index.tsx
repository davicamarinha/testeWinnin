interface IFFormatButton {
  isSelected?: boolean;
  onClick: () => void;
  label: string;
}

const FilterFormatsButton = ({
  isSelected,
  onClick,
  label,
}: IFFormatButton) => {
  return (
    <button
      onClick={onClick}
      className={`filterButton font-mulish mx-2 ${
        isSelected ? `filterButtonSelected` : `bg-white`
      }`}
    >
      {label}
    </button>
  );
};

export default FilterFormatsButton;
