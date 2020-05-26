import React, { Component } from 'react';
import {connect} from 'react-redux';

class Topbar extends Component {
    addNewForm = (e) =>{
        e.preventDefault();
        this.props.resetItem();
        this.props.changeStt();
    }

    render() {
        return (
            <nav className="topbar">
                <div className="container">
                    <div className="site-title">
                    <a   href={"#"}>Address Manager</a>
                    </div>
                    <div className="site-nav">
                    <div className="site-nav__item">
                        <a   href={"#"} onClick={(e)=>this.addNewForm(e)}>Add New Address</a>
                    </div>
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