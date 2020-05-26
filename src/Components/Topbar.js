import React, { Component } from 'react';

class Topbar extends Component {
    render() {
        return (
            <nav className="topbar">
                <div className="container">
                    <div className="site-title">
                    <a href="#">Address Manager</a>
                    </div>
                    <div className="site-nav">
                    <div className="site-nav__item">
                        <a href="#">Add New Address</a>
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

export default Topbar;