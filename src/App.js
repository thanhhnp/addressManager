import React, { Component } from 'react';
import './App.scss';
import Topbar from './Components/Topbar';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Topbar></Topbar>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
