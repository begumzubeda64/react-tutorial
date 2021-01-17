import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import React, { useEffect } from 'react';

const AutoSubmitToken = () => {
    const {values, submitForm} = useFormikContext();

    useEffect(() => {
        if(values && values.token && values.token.length === 6) {
            submitForm();
        }
    }, [values, submitForm]);

    return (
        <>
            <ErrorMessage component="div" className="error" name="token" />
        </>
    )
}

const FormApp = () => (
    <div className="form-container">
        <h1>2-step Verification</h1>
        <p>Please enter the 6 digit code sent to your device</p>
        <Formik
            initialValues={{ token: '' }}
            validate={values => {
                const errors = {};
                if(values.token.length < 6){
                    errors.token = "Invalid code. Too short."
                } else if(values.token.length > 6) {
                    errors.token = "Invalid code. Too long."
                }
                return errors;
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {
                ({values}) => (
                    <Form>
                        <Field className="form-control" name="token" type="tel" value={values.token} />
                        <AutoSubmitToken />
                    </Form>
                )
            }
        </Formik>
    </div>
)

export default FormApp;