interface IRow {
  children: JSX.Element;
  hasMargins?: boolean;
  isCentered?: boolean;
}

const Row = ({ children, hasMargins, isCentered }: IRow) => {
  return (
    <div
      className={`flex flex-row w-full ${
        isCentered
          ? `justify-center items-center`
          : `justify-start items-center`
      } ${hasMargins ? `my-6 px-3` : ``}`}
    >
      {children}
    </div>
  );
};

export { Row };
