import { withFormik } from 'formik';
import React from 'react';

export const App = (props) => {
    const { 
        values, 
        touched, 
        errors, 
        isSubmitting,
        handleChange, 
        handleBlur, 
        handleSubmit 
    } = props;

    return (
        <div className="form-container">
            <h1>My Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}
                onBlur={handleBlur} className="form-control" value={values.name}
                name="name" placeholder="Enter Name" />
                {errors.name && touched.name && <div className="error">{errors.name}</div>}
                <button disabled={isSubmitting} type="submit">{isSubmitting ? 'Please wait..': 'Submit'}</button>
            </form>
        </div>
    )
}

const MyForm = withFormik({
    mapPropsToValues: () => ({}),
    validate: values => {
        const errors = {};
        if(!values.name){
            errors.name = "Required"
        }
        return errors;
    },
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        });
    }
})(App);

export default MyForm;

