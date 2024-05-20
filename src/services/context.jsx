import { createContext, useState } from "react";
import ApiUserService from "./ApiUserService";
import MockUserService from "./MockUserService";

const source = {
  api: ApiUserService,
  mock: MockUserService,
};

export const SourceContext = createContext();

function SourceProvider({ children }) {
  const [currentSource, setCurrentSource] = useState(source.api);
  console.log("currentSource", currentSource);

  const toggleSource = () => {
    setCurrentSource((prevSource) =>
      prevSource === source.api ? source.mock : source.api
    );
  };

  const isApiSource = currentSource === source.api;

  return (
    <SourceContext.Provider
      value={{ source: currentSource, toggleSource, isApiSource }}
    >
      {children}
    </SourceContext.Provider>
  );
}

export default SourceProvider;
