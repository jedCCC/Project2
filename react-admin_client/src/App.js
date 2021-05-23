import React, {Component} from 'react';
import {message, Button} from 'antd';
//root component

export default class App extends Component{

    handleClick=()=>{
        message.success('this is a success message')
        
    }
    render(){
        return <Button type="primary" onClick={this.handleClick}>Primary</Button>
    }
}