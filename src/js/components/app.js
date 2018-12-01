import React from "react";
import { connect } from "react-redux";
import Auth from "./auth/index";

import { withRouter } from 'react-router';
import { hot } from 'react-hot-loader';
import Chat from "./chat";
import NavBar from "./container/nav";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
        console.log("raja   ")
    }
    render() {
        console.log(this.props, "vimal")
        if (!this.props.user.userLogin) {
            return (
                <Auth />
            );
        }
        else {
            return (
                <div>
                    <NavBar />
                    <Chat />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};
const mapActionToProp = () => {
    return {};
};
export default hot(module)(withRouter(connect(mapStateToProps, mapActionToProp)(App)));
