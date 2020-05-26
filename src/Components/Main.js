import React, { Component } from 'react';
import AddNew from './AddNew';
import List from './List';
import {addData} from '../firebaseConnect';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddNew: false,
            addList : [],
        }
    }
    
    showForm = () => {
        if(this.state.isAddNew){
            return (
                <AddNew></AddNew>
            );
        }
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    <h2 className="content__title">Address List</h2>
                    <div className="row">
                        <List></List>
                        {this.showForm()}
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;