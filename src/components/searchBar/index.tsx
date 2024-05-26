import { Dispatch, SetStateAction } from "react";

interface ISearchBar {
  searchText: string;
  onChange: (event: {}) => void;
  handleKeyPress: (event: {}) => void;
  handleSearchText: () => void;
}

const SearchBar = ({
  searchText,
  onChange,
  handleKeyPress,
  handleSearchText,
}: ISearchBar) => {
  return (
    <>
      <input
        type="text"
        placeholder="Digite algo..."
        className="px-3 py-3 border border-primary font-mulisn rounded-[4px] focus:outline-none focus:border-blue-500 max-w-[900px] w-full h-[38px]"
        onChange={onChange}
        value={searchText}
        onKeyDown={handleKeyPress}
      />
      <button
        className="font-mulisn rounded-[4px] bg-primary text-white w-[86px] h-[38px] ml-3"
        onClick={handleSearchText}
      >
        Buscar
      </button>
    </>
  );
};

export default SearchBar;
