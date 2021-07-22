import { combineReducers } from "redux";
import PostReducer from "./post-reducer";
import UserReducer from "./user-reducer";

export default combineReducers({
    posts: PostReducer,
    users: UserReducer
});