interface ISTag {
  value: number;
}

const ScoreTag = ({ value }: ISTag) => {
  const averagScore = (value: number) => {
    if (value < 50) {
      return "bg-asLow";
    } else {
      if (value >= 50 && value < 80) {
        return "bg-asMedium";
      } else {
        return "bg-asGood";
      }
    }
  };

  return (
    <div
      className={`px-[8px] py-[3px] rounded-[4px] text-white text-2xl font-normal ${averagScore(
        value
      )}`}
    >
      {value !== null ? value : 0}%
    </div>
  );
};

export default ScoreTag;
