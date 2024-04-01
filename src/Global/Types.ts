export type UserContextType = {
  user: string;
  setUser: (name: string) => void;
}

export type RepositoryContextType = {
  repository: string;
  setRepository: (name: string) => void;
}

export type ProfileCardProps = {
  name: string;
  email: string;
  following: string;
  followers: string;
  image: string;
  bio: string;
};

export type ProfileResponseType = {
  name: string;
  email: string;
  followers: string;
  following: string;
  avatar_url: string;
  bio?: string | null;
};

export type RepositoriesResponseType = {
  name: string;
  stargazers_count: number;
  language: string;
}[];

export type RepositoriesProps = {
  name: string;
  stargazers_count: number;
  language: string;
};