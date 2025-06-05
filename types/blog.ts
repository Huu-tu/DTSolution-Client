type Author = {
  name: string;
  image: string;
  designation: string;
};

export type BlogModel = {
  _id: number;
  title: string;
  paragraph: string;
  image: string;
  content: string;
  type: string[];
  publishDate: string;
};
