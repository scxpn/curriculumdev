export interface User {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  blog: string;
  createdAt: Date;
  email: string;
  followers: number;
  following: number;
  location: string;
  repos_url: string;
  html_url: string;
}

export interface Repositories {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  visibility: "public" | "private";
  language: string;
  language_url: string;
}
