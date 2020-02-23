export interface User {
  name: string;
  email: string;
  profilePic: string;
  password: string;
}

export interface Discussion {
  topic: string;
  posts: Post[];
  id: number;
  description: string;
}

export interface Post {
  title: string;
  body: string;
  poster: User;
  comments: Comment[];
}

export interface Comment {
  commenter: User;
  comment: string;
}

export interface KeyPerson {
  name: string;
  title: string;
  era: string;
  picture: string;
  bio: string;
  allegiance: string;
  wiki: string;
}

export interface TimeLineContent {
  url: string;
  header: string;
  body: string;
}
