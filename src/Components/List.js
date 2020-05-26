import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    render() {
        return (
            <ul className="address col">
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </ul>
        );
    }
}

export default List;