import { Post } from '../content/content.component';

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  articles: Post[];
}
