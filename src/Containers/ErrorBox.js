import React, { Component } from 'react';

class ErrorBox extends Component{
    
    constructor(props){
        super(props);
        this.State={
            haserror:false
        };
    }
    componentDidCatch(error,errorinfo){
       this.setState({haserror:true});
    }

    render(){
        if (this.State.hasError){
            return <h1>Errors found contact developer</h1>;
        }
        else{
            return this.props.children; 
        }
    }
}

export default ErrorBox;