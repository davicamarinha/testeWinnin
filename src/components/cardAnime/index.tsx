import Image from "next/image";
import styles from "../../styles/styles.module.css";
import Chip from "../chip";
import ScoreTag from "../scoreTag";

interface ICAnime {
  label: string;
  tags: [];
  score: number;
  image: string;
}

const CardAnime = ({ label, tags, score, image }: ICAnime) => {
  return (
    <div className="w-[317px] h-[270px] rounded-lg overflow-hidden relative mx-2 mb-5">
      <div className="w-[260px] left-[28px] top-[24px] absolute z-20">
        <h3 className="font-bold siz text-white text-2xl mb-3">{label}</h3>
        <div
          className="flex flex-1 flex-wrap justify-start"
          data-testid="tagsList"
        >
          {tags?.map((x, index) => (
            <Chip label={x} key={index} />
          ))}
        </div>
      </div>
      <>
        <div
          className={`${styles["cardAnimeGradient"]} w-[317px] h-[270px] absolute top-0 left-0 z-10`}
        ></div>
        <Image src={image} width={317} height={270} alt={label} />
      </>
      <>
        <div className="absolute bottom-2 right-2 z-20">
          <ScoreTag value={score} />
        </div>
      </>
    </div>
  );
};

export default CardAnime;
