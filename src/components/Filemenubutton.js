import Filemenu from './Filemenu'

import onClickOutside from 'react-onclickoutside'


import React, { Component } from 'react'

export class Filemenubutton extends Component {
    handleClickOutside = evt => {
        this.setState({clicked:false});
    }
    constructor(props){ 
        super(props);
        
        this.state={clicked:false};
    
    }
    setittrue = () => this.setState({clicked:!this.state.clicked});
    
    render() {
       
        return (
            <div className="h-full">
                <div className="h-full clickable zeropads buttontext" onClick={this.setittrue}>

                   
                        {this.props.ee.title}
                    
                </div>

                {this.props.ee.children&&this.state.clicked? <Filemenu data={this.props.ee} themechange={this.props.themechange}/> :""}
            </div>
        )
    }
}

export default onClickOutside(Filemenubutton)
