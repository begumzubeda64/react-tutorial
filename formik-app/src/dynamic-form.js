import React, { useEffect, useState } from 'react';
import { Formm, SelectField, SubmitButton, TextField } from './form-elements';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const formSchema = {
    name: {
        type: "text",
        label: "Name",
        required: true
    },
    email: {
        type: "email",
        label: "Email",
        required: true
    },
    role: {
        type: "select",
        label: "Role",
        required: true,
        options: [
            {
                label: "Admin",
                value: "admin"
            },
            {
                label: "User",
                value: "user"
            }
        ]
    }
};

const getFormElem = (elemName, elemSchema) => {
    const props = {
        name: elemName,
        label: elemSchema.label,
        options: elemSchema.options
    }

    if(elemSchema.type === "text" || elemSchema.type === "email"){
        return (
            <>
                <TextField {...props} />
                <ErrorMessage name={props.name} className="error" component="div" />
            </>
        )
    }
    if(elemSchema.type === "select"){
        return (
            <>
                <SelectField {...props} />
                <ErrorMessage name={props.name} className="error" component="div" />
            </>
        )
    }
}

const App = () => {
    const [formData, setFormData] = useState({});
    const [validationSchema, setValidationSchema] = useState({});

    useEffect(() => {
        initForm(formSchema);
    }, []);

    const initForm = () => {
        let _formData = {};
        let _schemaData = {}
        
        for(var key of Object.keys(formSchema)){
            _formData[key] ="";
            if(formSchema[key].type === "text"){
                if(formSchema[key].required){
                    _schemaData[key] = Yup.string().required('Required');
                }
                else{
                    _schemaData[key] = Yup.string();
                }
            } else if(formSchema[key].type === "email"){
                if(formSchema[key].required){
                    _schemaData[key] = Yup.string().required("Required").email("Invalid E-mail");
                }
                else{
                    _schemaData[key] = Yup.string().email("Invalid E-mail");
                }
                
            } else if(formSchema[key].type === "select"){
                if(formSchema[key].required){
                    _schemaData[key] = Yup.string().required("Required").oneOf(formSchema[key].options.map(o => o.value));
                }
                else{
                    _schemaData[key] = Yup.string().oneOf(formSchema[key].options.map(o => o.value));
                }
            }
        }
        
        setValidationSchema(Yup.object().shape({..._schemaData}));
        setFormData(_formData);
    }

    const onSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }

    return (
        <div className="form-container">
            <h1>My Form</h1>
            <Formm
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {Object.keys(formSchema).map((key, index) => {
                    return (<div key={index}>
                        {getFormElem(key, formSchema[key])}
                    </div>)
                })}
                <SubmitButton title="Submit Form" />
            </Formm>
        </div>
    );
}

export default App;
