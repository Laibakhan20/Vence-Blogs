export interface Post {
  _id: string;
  title: string;
  description: string;
  images?: { asset: { _ref: string; _type: string } }[];
  publishedAt: string;
  slug: {current: string};
  author: string;
}