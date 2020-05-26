import React, { Component } from 'react';
import AddNew from './AddNew';
import ListItem from './ListItem';
import {addData} from '../firebaseConnect';
import {connect} from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addList : [],
        }
    }
    
    showForm = () => {
        if(this.props.isAddNew){
            return (
                <AddNew></AddNew>
            );
        }
    }
    componentDidMount() {
        addData.on('value',(addList)=>{
            //Khai báo mảng dữ liệu mới chứa các obj
            var addListArr = [];
            //Duyệt từng phần tử để lấy ra key và value
            addList.forEach(element => {
                var addId = element.key;
                var addName = element.val().add_name;
                var addWard = element.val().add_ward;
                var addDistrict = element.val().add_district;
                var addCountry = element.val().add_country;
                var addCity = element.val().add_city;
                var addUser = element.val().user_id;
                var addDate = element.val().add_created;
                //gắn phần tử mới vào mảng
                addListArr.push({
                    addId,addName,addWard,addDistrict,addCity,addUser,addDate,addCountry
                });
            });
            //set state noteList
            this.setState({
                addList:addListArr,
            });
        });
    }
    
    render() {
        // console.log(addData);
        
        return (
            <div className="content">
                <div className="container">
                    <h2 className="content__title">Address List</h2>
                    <div className="row">
                    <ul className="address col">
                    {
                        this.state.addList.map((value,key) => {
                            return(
                                <ListItem 
                                stt={key+1} 
                                addId={value.addId}
                                addName={value.addName} 
                                addWard={value.addWard}
                                addDistrict={value.addDistrict}
                                addCity={value.addCity}
                                addCountry={value.addCountry}
                                addDate={value.addDate}
                                 ></ListItem>
                            )
                        })
                    }
                    </ul>
                        {this.showForm()}
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isAddNew: state.isAddNew,
    }
}

export default connect(mapStateToProps)(Main)