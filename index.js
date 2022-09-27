import Library from "./modules/BookList.js";
import * as navBar from "./modules/navBar.js";
import { date } from "./modules/time.js";
const BookListadd = new Library();
BookListadd.addBook();
BookListadd.renderBooks();