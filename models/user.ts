export interface User {
  _id: string;
  username: string;
  name: string | null;
  firstname: string | null;
  bio: string | null;
  image: string | null;
}

export interface UserInfo {
  id: string;
  objectId: string;
  username: string;
  name?: string;
  bio?: string;
  image?: string;
}
