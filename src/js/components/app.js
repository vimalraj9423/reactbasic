import React from "react";
import {connect} from "react-redux";
import Auth from  "./auth/index";

import { withRouter } from 'react-router';
class App extends React.Component{
    constructor(){
        super();
        this.state={
            loggedIn:false
        };
        console.log("reload condfdddddd")
    }
    render(){
        console.log(this.props,"vimal")
        if(!this.props.user.userLogin){
            return(
                <Auth/>
            );
        } 
        else{
            return"hghd";
        }
    }
}

const mapStateToProps = state => { 
    return { user: state.user };
};
const mapActionToProp = () => { 
    return { };
};
export default withRouter( connect(mapStateToProps,mapActionToProp)(App));