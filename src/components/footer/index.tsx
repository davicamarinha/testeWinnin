import Image from "next/image";

const MeuFooter = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto flex justify-center items-center h-54">
        <Image
          src="/assets/images/logo_footer.png"
          width={169}
          height={36}
          alt="Buscanime logo"
        />
      </div>
    </footer>
  );
};

export default MeuFooter;
