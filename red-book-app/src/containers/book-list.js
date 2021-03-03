import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books //passing state books as books props to BookList
    }
}

function mapDispatchToProps(dispatch) {
    //passing selectBook action creator as selectBook props to BookList
    return bindActionCreators({ selectBook: selectBook }, dispatch); //binding action creator function with dispatch
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList); //making store accessible to BookList component

