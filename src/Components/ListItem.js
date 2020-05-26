import React, { Component } from 'react';
import {connect} from 'react-redux';

class ListItem extends Component {
    getEditItem=()=>{
        var editedItem = {
            addId : this.props.addId,
            addName:this.props.addName,
            addWard:this.props.addWard,
            addDistrict:this.props.addDistrict,
            addCity:this.props.addCity,
            addCountry:this.props.addCountry,
            addUser:"1",
            addDate: this.props.addDate,
        }
        this.props.getItem(editedItem);
        // if(!this.props.isAddNew){
        //     
        // }
        this.props.changeStt();
    }
    showButton = () => {
        if(!this.props.isAddNew){
            return(
                <div className="btn-group">
                    <button className="btn btn-outline-info" onClick={()=>this.getEditItem()}><i className="fa fa-pencil"/>Edit</button>
                    <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure to delete this address?')) this.props.deleteItem(this.props.addId)} }><i className="fa fa-close" />Delete</button>
                </div>
            )
        }
    }
    render() {
        return (
            <li className="address__item">
                <div className="card">
                    <div className="card-header">
                    <span className="address__ord">{this.props.stt}</span>
                    <div className="address__action">
                        {this.showButton()}
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

const mapStateToProps = (state, ownProps) => {
    return {
        isAddNew: state.isAddNew,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStt: () => {
            dispatch({type:"CHANGE_STT"})
        },
        getItem: (editedItem) => {
            dispatch({type:"GET_ITEM",editedItem})
        },
        deleteItem:(deletedId) => {
            dispatch({type:"DELETE_ADDRESS",deletedId})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)