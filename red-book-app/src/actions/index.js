export function selectBook(book) { //action creator function
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}