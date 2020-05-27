import {addData} from '../firebaseConnect';

var redux = require('redux');

const addInitialState = {
    isAddNew : false,
    addData: addData,
    editedItem:{},
};
const allReducer = (state = addInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STT":
            return {...state,isAddNew:!state.isAddNew}
        case "ADD_ADDRESS":
            addData.push({
                add_name:action.addName,
                add_ward:action.addWard,
                add_district:action.addDistrict,
                add_city:action.addCity,
                add_country:action.addCountry,
                user_id:"1",
                add_img:action.addImg,
                add_created:action.addDate,
            });
            console.log(action);
            
            return state
        case "GET_ITEM":
            console.log(action.editedItem);
            return {...state,editedItem:action.editedItem} //get information of the edited Address
            
        case "RESET_ITEM":
            return {...state,editedItem:{}}
        case "EDIT_ADDRESS":
            addData.child(action.addId).update({
                add_name:action.addName,
                add_ward:action.addWard,
                add_district:action.addDistrict,
                add_city:action.addCity,
                add_country:action.addCountry,
                user_id:"1",
                add_img:action.addImg,
                add_created:action.addDate,
            })
            console.log(action);
            return state 
        case "DELETE_ADDRESS":
            addData.child(action.deletedId).remove();
        return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);

export default store;
