import { ReactNode, createContext, useState } from "react";

type RepositoriesProps = {
  name: string;
  description?: string;
  stargazers_count: number;
  language: string;
  html_url?: string;
};

type RepositoryContextType = {
  repositories: RepositoriesProps[];
  addRepository: (repository: RepositoriesProps) => void;
};

const RepositoryContext = createContext<RepositoryContextType | undefined>(
  undefined
);

type RepositoryProviderProps = {
  children: ReactNode;
};

const RepositoryProvider = ({ children }: RepositoryProviderProps) => {
  const [repositories, setRepositories] = useState<RepositoriesProps[]>([]);

  const addRepository = (newRepository: RepositoriesProps) => {
    setRepositories((prev) => [...prev, newRepository]);
  };

  const contextValue: RepositoryContextType = {
    repositories,
    addRepository,
  };

  return (
    <RepositoryContext.Provider value={contextValue}>
      {children}
    </RepositoryContext.Provider>
  );
};

export { RepositoryContext, RepositoryProvider };
