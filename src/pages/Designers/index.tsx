import React from "react";
import Topbar from "../../components/Topbar";
import { Designer, Status } from "../../libary/Pages";
import Header from "./Header";
import Main from "./Main";
import "./style.scss";

const Deigners: React.FC = () => {
  const [designers, setDesigners] = React.useState<Designer[] | []>([]);
  const [designersSearch, setDesignersSearch] = React.useState<Designer[] | []>(
    []
  );
  const [status, setStatus] = React.useState(Status.IDLE);
  const [searchIsActive, setSearchIsActive] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setStatus(Status.LOADING);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setDesigners(data);
        setStatus(Status.FULFILLED);
      } catch (err) {
        setStatus(Status.ERROR);
        console.log(err);
      }
    })();
  }, []);

  const setSearchResults = (value: string) => {
    const editedValue = value.trim().toLocaleLowerCase();

    const filteredDesigners = designers.filter((designer: Designer) => {
      if (designer.name.toLowerCase().includes(editedValue)) {
        return designer;
      }

      return;
    });
    setDesignersSearch(filteredDesigners);
  };

  return (
    <>
      <Topbar dark={false} />
      <Header
        setSearchResults={setSearchResults}
        handleSearchStatus={(isAcitve: boolean) => setSearchIsActive(isAcitve)}
        searchIsActive={searchIsActive}
      />
      <Main
        designers={designers}
        designersSearch={designersSearch}
        searchIsActive={searchIsActive}
        status={status}
      />
    </>
  );
};

export default Deigners;
