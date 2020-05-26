import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        return (
            <li className="address__item">
                <div className="card">
                    <div className="card-header">
                    <span className="address__ord">{this.props.stt}</span>
                    <div className="address__action">
                        <div className="btn-group">
                        <button className="btn btn-outline-info"><i className="fa fa-pencil" />Edit</button>
                        <button className="btn btn-outline-danger"><i className="fa fa-close" />Delete</button>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                    <div className="address__img">
                        <img src={this.props.addImg || "http://placehold.it/700x400"} alt="" />
                    </div>
                    <div className="address__info">
                        <div className="d-block w-100 street"><span>Name: </span> {this.props.addName}</div>
                        <div className="d-inline-block w-50 ward"><span>Ward: </span> {this.props.addWard}</div>
                        <div className="d-inline-block w-50 district"><span>District: </span> {this.props.addDistrict}</div>
                        <div className="d-inline-block w-50 city"><span>City: </span> {this.props.addCity}</div>
                        <div className="d-inline-block w-50 country"><span>Country: </span> {this.props.addCountry}</div>
                    </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItem;