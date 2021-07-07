import React from "react";
import Button from "../../components/Button";
import "./style.scss";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { useHistory, useLocation } from "react-router-dom";

type Props = {
  setSearchResults: (value: string) => void;
  handleSearchStatus: (isAcitve: boolean) => void;
  searchIsActive: boolean;
};

const DesignersHeader: React.FC<Props> = ({
  setSearchResults,
  handleSearchStatus,
  searchIsActive,
}) => {
  const [searchValue, setSearchValue] = React.useState("");
  const history = useHistory();
  const location = useLocation();

  const handleSearch = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("search", searchValue);

    history.push({
      pathname: location.pathname,
      search: searchParams.toString(),
    });

    if (searchValue === "" && searchIsActive) {
      handleSearchStatus(false);
      return;
    }
    setSearchResults(searchValue);
    handleSearchStatus(true);
  };

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleSearch]);

  return (
    <>
      <header className="designers-header">
        <div className="searchbar container row row--center">
          <div className="col col-12 col-8-lg">
            <div className="searchbar__element">
              <div className="searchbar__input-wrapper">
                <SearchIcon className="searchbar__icon" />
                <input
                  value={searchValue}
                  type="text"
                  className="searchbar__input"
                  placeholder="Vyhledávání"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <div className="searchbar__btn-wrapper">
                <Button
                  text="Vyhledat"
                  onBtnClick={handleSearch}
                  icon={false}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DesignersHeader;
