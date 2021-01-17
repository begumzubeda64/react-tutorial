import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid E-mail format")
        .required("E-mail Required"),
    password: Yup.string()
        .min(6, "Password must be min length 6 chars")
        .required("Password required")
});

const App = () => {
    const formik = useFormik({
        initialValues: { email: ``, password: `` },
        validationSchema: formSchema,
        initialTouched: { email: false, password: false },
        onSubmit: values => {
            alert(JSON.stringify(values, 2, null));
        }
    });

    return (
        <div className="form-container">
            <h1>My Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="input-field">
                    <input type="email" id="email" name="email" 
                    placeholder="Enter E-mail"
                    className="form-control"
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                    <span className="error">
                        { (formik.touched.email && formik.errors.email) ? formik.errors.email : '' }
                    </span>
                </div>
                <div className="input-field">
                    <input type="password" id="password" name="password" 
                    placeholder="Enter Password"
                    className="form-control"
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.password} />
                    <span className="error">
                        { (formik.touched.password && formik.errors.password) ? formik.errors.password : '' }
                    </span>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App;