export type BookResponse = {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
}

export type Book = Omit<BookResponse, 'id' | 'publicationYear'> & {
  id: number;
  publicationYear: Date;
};
