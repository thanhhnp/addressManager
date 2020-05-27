import React, { Component } from 'react';
import {connect} from 'react-redux';

class Topbar extends Component {
    addNewForm = (e) =>{
        e.preventDefault();
        this.props.resetItem();
        this.props.changeStt();
    }
    showAddLink = () => {
        if(!this.props.isAddNew){
            return (
                <div className="site-nav__item add-new">
                        <a  href={"#"} onClick={(e)=>this.addNewForm(e)}><i className="fa-address-book-o fa"></i> Add New Address</a>
                </div>
            );
        }
    }
    render() {
        return (
            <nav className="topbar">
                <div className="container">
                    <div className="site-title">
                    <a   href={"#"}>Address Manager</a>
                    </div>
                    <div className="site-nav">
                    {this.showAddLink()}
                    <div className="site-nav__item">
                        <a href="#">Address List</a>
                    </div>
                    <div className="site-nav__item">
                        <a href="#">Log Out</a>
                    </div>
                    </div>
                </div>
            </nav>
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
        resetItem: () => {
            dispatch({type:"RESET_ITEM"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topbar)