import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li className="address__item">
                <div className="card">
                    <div className="card-header">
                    <span className="address__ord">1</span>
                    <div className="address__action">
                        <div className="btn-group">
                        <button className="btn btn-outline-info"><i className="fa fa-pencil" />Edit</button>
                        <button className="btn btn-outline-danger"><i className="fa fa-close" />Delete</button>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                    <div className="address__img">
                        <img src="http://placehold.it/700x400" alt="" />
                    </div>
                    <div className="address__info">
                        <div className="d-block w-100 street"><span>Name: </span> 13A Đinh Tiên Hoàng</div>
                        <div className="d-inline-block w-50 ward"><span>Ward: </span> P.14</div>
                        <div className="d-inline-block w-50 district"><span>District: </span> Bình Thạnh</div>
                        <div className="d-inline-block w-50 city"><span>City: </span> Hồ Chí Minh</div>
                        <div className="d-inline-block w-50 country"><span>Country: </span> Việt Nam</div>
                    </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItem;