import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class PostCreateComponent extends React.Component {
    state = {
        title: '',
        content: ''
    }

    handleSubmit(e){
        const {userid} = this.props.match.params.userid;
        e.preventDefault();
        e.stopPropagation();
        axios.post(`http://localhost:3000/api/users/${userid}/posts`, {data: this.state})
        .then(res => {
           console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
     }

    handleChange(e){
        const {name, value} = e.target;
        this.setState(s => {
            return {
                ...s, [name]: value
            }
        })
    }
    render(){
        const { title, content } = this.state;
        return (
        <React.Fragment>
            <Container className="my-3">
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control onChange={(e) => this.handleChange(e)} value={title} type="text" name="title" placeholder="Enter Title" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Content</Form.Label>
                                <Form.Control onChange={(e) => this.handleChange(e)}  name="content" value={content} type="text" placeholder="Enter Content" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
        );
    }
}

export default PostCreateComponent;
