import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';
import './ChildNav.scss'

@observer
export default class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NavIndex: 0,
        }
    };

    render() {
        return (
            <div className="c_nav">
                <ul className="nav_list clear">
                    {
                        this.props.navList.map((item, index)=>{
                            return (
                                <li className={index === this.state.NavIndex? 'nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.setState({NavIndex: index})}} key={index}>
                                    <Link to={item.link}>{item.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
