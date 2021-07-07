import React from "react";
import Button from "../../components/Button";
import "./style.scss";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

type Props = {
  setSearchResults: (value: string) => void;
};

const DesignersHeader: React.FC<Props> = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = React.useState("");

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
              <Button
                text="Vyhledat"
                onBtnClick={() => {
                  if (searchValue === "") {
                    return;
                  }
                  setSearchResults(searchValue);
                }}
                icon={false}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DesignersHeader;
