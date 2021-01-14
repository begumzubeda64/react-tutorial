import React, { useRef } from 'react';

const ProductForm = ({handleProduct}) => {
    const name = useRef(null);
    const price = useRef(null);
    const info = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        var product = {
            name: name.current.value,
            price: Number(price.current.value),
            info: info.current.value
        };
        handleProduct(product);
        name.current.value = "";
        price.current.value = 0;
        info.current.value = "";
    }

    return (
    <form onSubmit={submit}>
        <h3>Add new product</h3>
        <div className="row form-group">
            <label className="col-sm-2  col-sm-form-label">Name:</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    ref={name}
                    placeholder="e.g. android"
                    required
                />
            </div>
        </div>

        <div className="row form-group">
            <label className="col-sm-2  col-sm-form-label">Price:</label>
            <div className="col-sm-10">
                <input
                    type="number"
                    className="form-control"
                    ref={price}
                    placeholder="e.g. 100"
                    required
                />
            </div>
        </div>

        <div className="row form-group">
            <label className="col-sm-2  col-sm-form-label">Info:</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    ref={info}
                    placeholder="e.g. product of google"
                />
            </div>
        </div>

        <div className="row form-group">
            <div className="offset-2 col-10">
                <button className="btn btn-outline-primary">Create Product</button>
            </div>
        </div>

        <hr />
    </form>
    );

}

export default ProductForm;

