export type BookResponse = {
  id: string;
  title: string;
  author: string;
  genre: string;
  publication_year: string;
  image_url?: string;
};

export type Book = Omit<BookResponse, 'publicationYear'> & {
  publication_year: Date;
};
