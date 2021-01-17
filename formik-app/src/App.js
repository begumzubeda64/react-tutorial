import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format!")
    .required("E-mail is required"),
  password: Yup.string()
    .min(3, "Password must be minimum 3 chars")
    .required("Password is required"),
  name: Yup.string()
    .min(4, "Name must be minimum 4 chars")
    .required("Name is required")
});

const App = () => {
  return (
    <div className="form-container">
      <h1>My Form</h1>
      <Formik
        initialValues={{ name: "", email:"", password: "" }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
          }, 1000);
        }}
      >
        {
          ({ errors, values, touched, isSubmitting }) => (
            <Form>
              <div className="input-field">
                <Field type="text" value={values.name} name="name" placeholder="Enter Name" 
                className={`form-control ${(touched.name && errors.name) ? 'is-invalid' : ''}`}/> 
                <ErrorMessage component="span" className="error" name="name" />
              </div>

              <div className="input-field">
                <Field type="email" value={values.email} name="email" placeholder="Enter E-mail" 
                className={`form-control ${(errors.email && touched.email) ? 'is-invalid' : ''}`}/> 
                <ErrorMessage component="span" className="error" name="email" />
              </div>

              <div className="input-field">
                <Field type="password" value={values.password} name="password" placeholder="Enter Password" 
                className={`form-control ${(errors.password && touched.password) ? 'is-invalid' : ''}`}/> 
                <ErrorMessage component="span" className="error" name="password" />
              </div>
              <button className="btn btn-primary btn-block" disabled={isSubmitting} type="submit">{isSubmitting ? 'Please wait..': 'Submit'}</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}

export default App;
