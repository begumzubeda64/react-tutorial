import { combineReducers } from "redux";
import BooksReducer from './list-books';
import ActiveBook from './active-book';


const RootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default RootReducer;