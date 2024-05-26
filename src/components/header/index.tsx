import Image from "next/image";

const MeuHeader = () => {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-center items-center h-68">
        <Image
          src="/assets/images/logo.png"
          width={232}
          height={20}
          alt="Buscanime logo"
        />
      </div>
    </header>
  );
};

export default MeuHeader;
