import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class ContainerComp extends React.Component {
    state = {
        UserName: '',
        FirstName: '',
        LastName: ''
    }

    handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        axios.post(`http://localhost:3000/api/users`, {data: this.state})
        .then(res => {
            console.log(res.data);
            const {_id} = res.data;
            console.log(_id);
            this.props.history.push(`/blog/${_id}`);
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
        const {UserName, FirstName, LastName} = this.state;
        return (
        <React.Fragment>
            <Container className="my-3">
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={(e) => this.handleChange(e)} value={UserName} type="text" name="UserName" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={(e) => this.handleChange(e)}  name="FirstName" value={FirstName} type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={(e) => this.handleChange(e)}  name="LastName" value={LastName} type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
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

export default ContainerComp;
