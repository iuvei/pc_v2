import { observer } from 'mobx-react';
import React, { Component, PropTypes } from 'react';

import HeaderNav from '../Common/HeaderNav/headerNav'
import Footer from '../Common/Footer/Footer'

import './Home.scss';

@observer
export default class Home extends Component {
    render() {
        return (
            <div className="berCenter">
                <div className="berCenter_bg">
                    <header>
                        <HeaderNav/>
                    </header>
                    <div>
                        {this.props.children}
                    </div>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </div>
        );
    }
}


