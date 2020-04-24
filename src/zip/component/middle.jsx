import React, {Component} from 'react';
import '../App.css';
import Body from './body';
import Navbar from './navbar';

class Middle extends Component {
    render () {
        return (
            <div className='rowc'>
                <Navbar />
                <Body />
            </div>
        );
    }
}

export default Middle;