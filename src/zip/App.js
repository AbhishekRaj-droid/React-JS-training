import React, {Component} from 'react';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Middle from './component/middle';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Middle />
        <Footer />
      </div>
    );
  }
}

export default App;
