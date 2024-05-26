interface ISMButton {
  onClick: () => void;
  disabled: boolean;
}

const SeeMoreButton = ({ onClick, disabled }: ISMButton) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? `bg-disab` : `bg-asMedium`
      } w-full flex flex-1 h-[48px] justify-center items-center rounded-[8px] text-white font-semibold text-xl`}
    >
      <span className="text-3xl mr-4">+</span> Ver mais
    </button>
  );
};

export default SeeMoreButton;
