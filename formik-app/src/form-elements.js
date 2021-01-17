import { Field, Form, Formik, useFormikContext } from 'formik';
import React from 'react';

export function Formm(props) {
    return (
        <Formik {...props}>
            <Form>
                { props.children }
            </Form> 
        </Formik>
    )
}

export function TextField(props) {
    const {name, label, placeholder, ...rest} = props;
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                className="form-control"
                type="text"
                name={name}
                placeholder={placeholder || ''}
                {...rest}
            />
        </>
    )
}

export function SelectField(props) {
    const {name, label, options} = props;
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                className="form-control"
                component="select"
                id={name}
                name={name}
            >
               <option value="">Choose...</option> 
               {options.map((optn, index) => <option key={index} value={optn.value} label={optn.label || optn.value} />)}
            </Field>
        </>
    )
}

export function SubmitButton(props) {
    const {title, ...rest} = props;
    const {isSubmitting} = useFormikContext();
    return (
        <button type="submit" {...rest} disabled={isSubmitting}>{isSubmitting ? 'Loading..' : title}</button>
    )
}