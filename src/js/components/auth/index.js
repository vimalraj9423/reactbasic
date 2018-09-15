import React from "react";
import {connect} from "react-redux"; 

import { Switch, Route, } from 'react-router-dom';
import SignUp from "./signup"; 

class Index extends React.Component{
    constructor(){
        super(); 
    }
    render(){
        return(
            <div>
                <Route path="/signup" component={SignUp} />
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