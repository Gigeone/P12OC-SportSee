import { createContext, useState } from "react";
import ApiUserService from "./ApiUserService";
import MockUserService from "./MockUserService";

const source = {
  api: ApiUserService,
  mock: MockUserService,
};

export const SourceContext = createContext();

/**
 * A React component that provides a context for the current source of data.
 * It manages the current source and allows toggling between the API source and the mock source.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @return {JSX.Element} The SourceProvider component.
 */
const SourceProvider = ({ children }) => {
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
};

export default SourceProvider;
