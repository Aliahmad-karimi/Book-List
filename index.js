import Library from './modules/BookList.js';
import * as navBar from './modules/navBar.js';// eslint-disable-line
import { date } from './modules/time.js';// eslint-disable-line

const BookListadd = new Library();
BookListadd.addBook();
BookListadd.renderBooks();