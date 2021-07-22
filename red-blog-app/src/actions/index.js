import _ from 'lodash';
import axios from '../apis/index';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq( _.map(getState().posts, 'userId') );
    userIds.forEach( id => dispatch(fetchUser(id)) );
}

export const fetchPosts = () => async (dispatch) => {
    const res = await axios.get('/posts');
    console.log('posts--', res.data);
    dispatch({ type: 'FETCH_POSTS', payload: res.data });
}

export const fetchUser = (id) => async (dispatch) => {
    const res = await axios.get(`/users/${id}`);
    console.log('user--', res.data);
    dispatch({ type: 'FETCH_USER', payload: res.data });
}