import { Author } from '../domain/index';

export default (authorId, authors) =>
  new Author(authors.filter(author =>
    author.id === authorId)[0]).name;
