import { connect } from "react-redux";
import React from "react";
import { fetchPostsAndUsers } from '../actions/index';
import UserData from "./user-data";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList(){
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className = "large middle aligned icon user" />
                    <div className = "content">
                        <div className = "description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserData userId={post.userId} />
                    </div>
                </div>
            );
    
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);