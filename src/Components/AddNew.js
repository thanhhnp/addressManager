import React, { Component } from 'react';

class AddNew extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="add">
                <h3 className="add__title">Add New Address</h3>
                <form>
                <div className="form-group">
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" className="form-control" id="nameInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="countryInput">Country</label>
                    <input type="text" className="form-control" id="countryInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="cityInput">City</label>
                    <input type="text" className="form-control" id="cityInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="districtInput">District</label>
                    <input type="text" className="form-control" id="districtInput" />
                </div>
                <div className="form-group">
                    <label htmlFor="wardInput">Ward</label>
                    <input type="text" className="form-control" id="wardInput" />
                </div>
                <button type="submit" className="btn btn-info">Add New</button>
                </form>
            </div>
            </div>
        );
    }
}

export default AddNew;