import React from "react";
import {connect} from "react-redux"; 

import { Switch, Route, } from 'react-router-dom';
import SignUp from "./signup"; 
import  Customtable from"../customtable";
class Index extends React.Component{
    constructor(){
        super(); 
    }
    render(){
        return(
            <div>
                <Route path="/signup" component={SignUp} />
                <Route path="/customtable" component={Customtable} />
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return { user: state.user };
};
const mapActionToProp = () => { 
    return { };
};
export default connect(mapStateToProps,mapActionToProp)(Index);