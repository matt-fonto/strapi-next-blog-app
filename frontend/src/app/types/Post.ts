// interface Post is composed of an id and attributes
export interface Post {
  id: number;
  // the attributes are custom
  attributes: PostAttributes;
}

// the PostAttributes is composed of:
export interface PostAttributes {
  slug?: string;
  author: string;
  title: string;
  body: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
