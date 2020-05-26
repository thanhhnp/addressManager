import {addData} from '../firebaseConnect';

var redux = require('redux');

const addInitialState = {
    isAddNew : true,
    addData: addData,
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
                add_img:null,
                add_created:action.addDate,
            })
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);

export default store;
