import React, { Component } from 'react';
import {connect} from 'react-redux';
import {storage} from '../firebaseConnect';
import store from './store';

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
            addImg:null,
        }
    }
    
    checkImg = () => {
        if(this.props.editedItem.addImg) {
            return ( 
                <img src={this.props.editedItem.addImg}/>
            )
        }
        else {
            return;
        }
    }
    changeData = (e) => {
        var fieldname = e.target.name;
        var fieldvalue = e.target.value;
        this.setState({
            [fieldname] : fieldvalue,
        });
    }
    changeImage = (e) => {
        if(e.target.files[0]){
            var image = e.target.files[0];
            //Upload Image
            const uploadImg = storage.ref(`images/${image.name}`).put(image);
            uploadImg.on("state_changed",snapshot=>{}, error => {
                console.log(error);
            },
            ()=>{
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({
                        addImg:url
                    })
                })
            });
        }
    }
    addNew = () => {
        var flag = true;
        for(let index in this.state) 
        {
            if(this.state[index]==="" || this.state[index]===null || this.state[index]===undefined) {flag = false}
        }
        if(flag) //OK 
        {
            // If there is an address Id => Edit Item
            if(this.props.editedItem.addId) 
            {
                this.props.editItem(
                    this.props.editedItem.addId,
                    this.state.addName,
                    this.state.addWard,
                    this.state.addDistrict,
                    this.state.addCity,
                    this.state.addCountry,
                    this.state.addDate,
                    this.state.addImg);
            }
            // Else => Add new Item
            else 
            {
                this.props.addNew(
                    this.state.addName,
                    this.state.addWard,
                    this.state.addDistrict,
                    this.state.addCity,
                    this.state.addCountry,
                    this.state.addDate,
                    this.state.addImg);
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
                addImg:this.props.editedItem.addImg,
                addUser:"1",
            });
        }
    }
    render() {
        return (
            <div className="col-12 col-sm-4">
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
                    <div className="form-group">
                        {this.checkImg()}
                        <label htmlFor="addImg">Upload Image</label>
                        <input type="file" className="form-control-file" name="addImg" id="addImg" onChange={(e)=>this.changeImage(e)} />
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
        addNew: (addName,addWard,addDistrict,addCity,addCountry,addDate,addImg) => {
            dispatch({type:"ADD_ADDRESS",addName,addWard,addDistrict,addCity,addCountry,addDate,addImg})
        },
        editItem: (addId,addName,addWard,addDistrict,addCity,addCountry,addDate,addImg) => {
            dispatch({type:"EDIT_ADDRESS",addId,addName,addWard,addDistrict,addCity,addCountry,addDate,addImg})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew)