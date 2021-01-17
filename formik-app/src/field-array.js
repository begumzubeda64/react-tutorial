import { Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';

const App = () => {
    return (
        <div className="form-container">
            <h1>Friends List</h1>
            <Formik
                initialValues={{ friends: ['Ian', 'Scott', 'Mia'] }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500)
                }}
            >
                {
                    ({values}) => (
                        <Form>
                            <FieldArray
                                name="friends"
                                render={arrayHelpers => (
                                    <div>
                                        {values.friends && values.friends.length > 0 ? (
                                            values.friends.map((friend, index) => (
                                                <div key={index}>
                                                    <Field className="input-field me-2" value={friend} name={`friends.${index}`} />
                                                    <button type="button" onClick={() => arrayHelpers.remove(index)}>x</button>
                                                    <button type="button" onClick={() => arrayHelpers.insert(index + 1, "")}>+</button>
                                                </div>
                                            ))
                                        ) : (
                                            <button type="button" onClick={() => arrayHelpers.push("")}>
                                                Add New Friend
                                            </button>
                                        )}
                                        <div>
                                        <button type="submit">Submit</button>
                                        </div>
                                    </div>                      
                                )}
                            />
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default App;