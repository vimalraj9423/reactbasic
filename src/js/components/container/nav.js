import React from "react";
import {connect} from "react-redux"; 
class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-light navbar-light"> 
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 3</a>
              </li>
            </ul>
          
          </nav>);
    }
}

const mapStateToProps = state => { 
    return { user: state.user };
};
const mapActionToProp = ( ) => { 
    return {  };
};
export default connect(mapStateToProps,mapActionToProp)(NavBar);
