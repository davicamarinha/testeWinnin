interface IChip {
  label: string;
}

const Chip = ({ label }: IChip) => {
  return (
    <div
      className="text-white text-xs bg-primaryLight rounded-[4px] px-[8px] py-[3px] mr-2 mb-2"
      role="tag"
    >
      {label}
    </div>
  );
};

export default Chip;
