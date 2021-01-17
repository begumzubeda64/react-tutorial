import { Field, Form, Formik } from 'formik';
import React from 'react';

const App = () => {
  return (
    <div className="form-container">
      <h1>My Form</h1>
      <Formik
        initialValues={{ toggle: false, checked: [] }}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        }}
      >
        {
          ({values, isSubmitting}) => (
            <Form>
              <Field type="checkbox" name="toggle" />
              {`${values.toggle}`} <br/>

              <Field className="form-check-input" type="checkbox" value="1" name="checked" />
              <label className="form-check-label">1</label> <br/>
              <Field className="form-check-input" type="checkbox" value="2" name="checked" />
              <label className="form-check-label">2</label> <br/>
              <Field className="form-check-input" type="checkbox" value="3" name="checked" />
              <label className="form-check-label">3</label> <br/>
              <Field className="form-check-input" type="checkbox" value="4" name="checked" />
              <label className="form-check-label">4</label> <br/>

              <button disabled={isSubmitting} type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}

export default App;
