import React from 'react';
import { ListGroup, Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios';
import PostCreateComponent from './post-create';

class UserContainer extends React.Component {
    state = {
        posts: '',
        addNewPost: false
    }

    componentDidMount() {
        // const {userId} = this.props.match.params.userid;
        // axios.get(`http://localhost:3000/api/users/${userId}/posts`)
        // .then(res => {
        //     this.setState({
        //         posts: res.data
        //     });
        // });
        this.setState({
            posts: [{title: 'My First Blog Post', content: 'Hie Peeps!!!'}, {title: 'Food', content: 'Food is important!!!'}]
        });
    }

    render(){
        return (
        <Container className="my-3">
            <ListGroup defaultActiveKey="#link1">
                {
                    this.state.posts.length > 0 && this.state.posts.map((i, index) => {
                        return (
                            <ListGroup.Item key={index} action href="#Link1">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{i.title}</Card.Title>
                                        <Card.Text>
                                        {i.content}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            <Button variant="primary" className="my-2" onClick={() => this.setState({addNewPost: !this.state.addNewPost})}>Add New Post</Button>
            { this.state.addNewPost && <PostCreateComponent />}
        </Container>
        );
    }
}

export default UserContainer;
