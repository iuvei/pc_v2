/*二级导航栏*/
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';
import './ChildNav.scss'

@observer
export default class ChildNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavIndex: 0,
        };
        console.log(this.state.NavIndex)
    };
    handClick(index) {
        this.setState({NavIndex: index});
        this.props.onChangeNavIndex(index);
    }
    componentDidMount() {
        console.log('12345');
        // this.props.NavIndex !== undefined ? this.setState({NavIndex: parseInt(this.props.NavIndex.navIndex)}) : '';
    };
    render() {
        // console.log(this.state.NavIndex);
        return (
            <div className="c_nav">
                <ul className="nav_list clear">
                    {
                        this.props.navList.map((item, index)=>{
                            return (
                                <li className={index === this.state.NavIndex? 'nav_active' : 'hvr-overline-from-left hvr-fade'} onClick={()=>{this.handClick(index)}} key={index}>
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
