import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name required"),
    email: Yup.string()
        .email("Invalid E-mail format")
        .required("E-mail Required"),
    channel: Yup.string()
        .required("Channel name required")
});

const initialValues = { name: ``, email: ``, channel: `` };
const initialTouched = { name: false, email: false, channel: false };

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const onSubmit = async (values, actions) => {
    await sleep(1000);
    alert(JSON.stringify(values, 2, null));
    actions.setSubmitting(false);
}

const App = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        initialTouched,
        onSubmit
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
                    <input type="text" id="name" name="name" 
                    placeholder="Enter Name"
                    className="form-control"
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.name} />
                    <span className="error">
                        { (formik.touched.name && formik.errors.name) ? formik.errors.name : '' }
                    </span>
                </div>
                <div className="input-field">
                    <input type="text" id="channel" name="channel" 
                    placeholder="Enter Channel"
                    className="form-control"
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.channel} />
                    <span className="error">
                        { (formik.touched.channel && formik.errors.channel) ? formik.errors.channel : '' }
                    </span>
                </div>
                <button disabled={formik.isSubmitting} type="submit">{formik.isSubmitting ? 'Please wait..': 'Submit'}</button>
            </form>
        </div>
    )
}

export default App;