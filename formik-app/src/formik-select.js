import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

export default class MyForm extends React.Component {
    handleSubmit = (values, {props = this.props, setSubmitting}) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        return;
    }

    render() {
        return (
        <div className="container">
            <h1>Form</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    gender: '',
                    domain: ''
                }}

                validate={(values) => {
                    let errors = {}

                    if(!values.email) {
                        errors.email = "*Required"
                    }

                    return errors;
                }}

                onSubmit={this.handleSubmit}
            >
                {
                    (props) => (
                        <Form>
                            <Field className="my-2 form-control" placeholder="Enter name" type="text" name="name" />
                            <ErrorMessage name="name" className="error" component="div" />

                            <Field className="my-2 form-control" placeholder="Enter email" type="email" name="email" />
                            <ErrorMessage name="email" className="error" component="div" />

                            <Field className="my-2" component="select" name="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                            <ErrorMessage name="gender" className="error" component="div" />

                            <label htmlFor="com">
                                <Field className="me-2" type="radio" name="domain" id="com" value=".com" />
                                .com
                            </label>
                            <label htmlFor="net">
                                <Field className="me-2" type="radio" name="domain" id="net" value=".net" />
                                .net
                            </label>
                            <label htmlFor="in">
                                <Field className="me-2" type="radio" name="domain" id="in" value=".in" />
                                .in
                            </label>

                            <ErrorMessage name="domain" className="error" component="div" />
                            <div>{props.values.domain}</div>

                            <button type="submit" disabled={props.isSubmitting}>Submit Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
        )
    }
}