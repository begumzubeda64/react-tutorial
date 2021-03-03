import BookList from '../containers/book-list';
import BookDetail from '../containers/active-book';
import '../App.css';

function App() {
  return (
    <div className="row">
      <BookList className="col-sm-8" />
      <BookDetail className="col-sm-4" />
    </div>
  );
}

export default App;
