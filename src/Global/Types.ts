export type User = {
  name: string;
  setName: (value: string) => void;
};

export type ProfileProps = {
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

export type RepositoriesProps = {
  name: string;
  description?: string;
  stargazers_count: number;
  language: string;
  html_url?: string;
};

export type RepositoriesResponseType = {
  name: string;
  description?: string;
  stargazers_count: number;
  language: string;
  html_url?: string;
}[];
