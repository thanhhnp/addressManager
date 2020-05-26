import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddNew extends Component {
    constructor(props) {
        super(props);
        
        var todayDate = new Date().getDate();
        var todayMonth = new Date().getMonth() + 1;
        var todayYear = new Date().getFullYear();
        var addDate = todayDate+"-0"+todayMonth+"-"+todayYear;
        
        this.state = {
            addDate : addDate,
            addName:"",
            addWard:"",
            addDistrict:"",
            addCity:"",
            addCountry:"",
            addUser:"1",
        }
    }
    
    changeData = (e) => {
        var fieldname = e.target.name;
        var fieldvalue = e.target.value;
        console.log(fieldname + " - " +fieldvalue);
        this.setState({
            [fieldname] : fieldvalue,
        });
    }
    addNew = () => {
        this.props.addNew(this.state.addName,this.state.addWard,this.state.addDistrict,this.state.addCity,this.state.addCountry,this.state.addDate);
        
        this.props.changeStt();
    }
    render() {
        return (
            <div className="col-4">
                <div className="add">
                <h3 className="add__title">Add New Address</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="addName">Name</label>
                        <input type="text" className="form-control" name="addName" id="addName" onChange={(e)=>this.changeData(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addCountry">Country</label>
                        <input type="text" className="form-control" name="addCountry" id="addCountry"  onChange={(e)=>this.changeData(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addCity">City</label>
                        <input type="text" className="form-control" name="addCity" id="addCity" onChange={(e)=>this.changeData(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addDistrict">District</label>
                        <input type="text" className="form-control" name="addDistrict" id="addDistrict"  onChange={(e)=>this.changeData(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addWard">Ward</label>
                        <input type="text" className="form-control" id="addWard" name="addWard" onChange={(e)=>this.changeData(e)}/>
                    </div>
                    <button type="reset" className="btn btn-info" onClick={()=>this.addNew()}>Add New</button>
                </form>
            </div>
            </div>
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
        addNew: (addName,addWard,addDistrict,addCity,addCountry,addDate) => {
            dispatch({type:"ADD_ADDRESS",addName,addWard,addDistrict,addCity,addCountry,addDate})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew)