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
        this.setState({
            [fieldname] : fieldvalue,
        });
    }
    addNew = () => {
        var flag = true;
        for(let index in this.state) 
        {
            if(this.state[index]==="") {flag = false}
        }
        if(flag) //OK 
        {
            // If there is an address Id => Edit Item
            if(this.props.editedItem.addId) {
                this.props.editItem(this.props.editedItem.addId,this.state.addName,this.state.addWard,this.state.addDistrict,this.state.addCity,this.state.addCountry,this.state.addDate);
            }
            // Else => Add new Item
            else 
            {
                this.props.addNew(this.state.addName,this.state.addWard,this.state.addDistrict,this.state.addCity,this.state.addCountry,this.state.addDate);
            }
            this.props.changeStt();
        }
        else {
            alert("Required");
        }
    }

    //In case there's nothing changed (edit case)
    componentDidMount() {
        if(this.props.editedItem.addId) // => edit address
        {
            this.setState ( {
                addDate: this.props.editedItem.addDate,
                addName:this.props.editedItem.addName,
                addWard:this.props.editedItem.addWard,
                addDistrict:this.props.editedItem.addDistrict,
                addCity:this.props.editedItem.addCity,
                addCountry:this.props.editedItem.addCountry,
                addUser:"1",
            });
        }
    }
    render() {
        return (
            <div className="col-4">
                <div className="add">
                <h3 className="add__title">{this.props.editedItem.addId ? "Edit Address" : "Add New Address"}</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="addName">Name</label>
                        <input type="text" className="form-control" name="addName" id="addName" onChange={(e)=>this.changeData(e)} defaultValue={this.props.editedItem.addName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addCountry">Country</label>
                        <input type="text" className="form-control" name="addCountry" id="addCountry"  onChange={(e)=>this.changeData(e)} defaultValue={this.props.editedItem.addCountry}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addCity">City</label>
                        <input type="text" className="form-control" name="addCity" id="addCity" onChange={(e)=>this.changeData(e)}  defaultValue={this.props.editedItem.addCity}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addDistrict">District</label>
                        <input type="text" className="form-control" name="addDistrict" id="addDistrict"  onChange={(e)=>this.changeData(e)} defaultValue={this.props.editedItem.addDistrict}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addWard">Ward</label>
                        <input type="text" className="form-control" id="addWard" name="addWard" onChange={(e)=>this.changeData(e)} defaultValue={this.props.editedItem.addWard}/>
                    </div>
                    <div className="btn-group">
                        <button type="reset" className="btn btn-info" onClick={()=>this.addNew()}>{this.props.editedItem.addId ? "Edit" : "Add new"}</button>
                        <button className="btn btn-secondary" onClick={()=>this.props.changeStt()}>Cancel</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editedItem:state.editedItem,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStt: () => {
            dispatch({type:"CHANGE_STT"})
        },
        addNew: (addName,addWard,addDistrict,addCity,addCountry,addDate) => {
            dispatch({type:"ADD_ADDRESS",addName,addWard,addDistrict,addCity,addCountry,addDate})
        },
        editItem: (addId,addName,addWard,addDistrict,addCity,addCountry,addDate) => {
            dispatch({type:"EDIT_ADDRESS",addId,addName,addWard,addDistrict,addCity,addCountry,addDate})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew)