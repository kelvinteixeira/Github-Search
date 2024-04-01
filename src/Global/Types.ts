export type UserContextType = {
  user: string;
  setUser: (name: string) => void;
}

export type RepositoryContextType = {
  repository: string;
  setRepository: (name: string) => void;
}