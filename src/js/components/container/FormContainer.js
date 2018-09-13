import React, { Component } from "react";

import Input from "../presentational/Input";
import "./formContainer.scss"

import { connect } from "react-redux";
import { updateLogin } from "../../action/user.action";
class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        console.log(this.props, "df")
        const { seo_title } = this.state;
        return (
            <form id="article-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
                {this.props.user.userLogin && <p className="header">logged in</p>}
                <a onClick={this.props.updateLogin}>click here</a>
            </form>
        );
    }
}
const mapStateToProps = state => { 
    return { user: state.user };
};
const mapActionToProp = dispatch => { 
    return { updateLogin: ()=>dispatch(updateLogin()) };
};
export default connect(mapStateToProps, mapActionToProp)(FormContainer);
