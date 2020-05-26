import React, { Component } from 'react';
import AddNew from './AddNew';
import List from './List';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="content">
                <div className="container">
                    <h2 className="content__title">Address List</h2>
                    <div className="row">
                        <List></List>
                        <AddNew></AddNew>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;