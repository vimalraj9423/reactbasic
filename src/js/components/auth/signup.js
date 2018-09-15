import React from "react";
import {connect} from "react-redux";
import Input from "../presentational/Input";
import { updateLogin } from "../../action/user.action";
import socket from "../socket/index";
class SignUp extends React.Component{
    constructor(){
        super();
        this.onClickRegister=this.onClickRegister.bind(this);
    }
    onClickRegister(){
        socket.connectSocket();
        this.props.updateLogin();
    }
    render(){
        console.log("Ss")
        return (<form>
<Input
                    text="user Name"
                    label="user"
                    type="text"
                    id="userName" 
                    ref={el=>this.userName=el}
                    handleChange={this.handleChange}
                /> 
                <Input
                    text="password"
                    label="user"
                    type="password"
                    id="passward" 
                    ref={el=>this.password=el}
                    handleChange={this.handleChange}
                /> dfdffdfdfddfdff
                <a className="btn btn-primary" href="#" role="button" onClick={this.onClickRegister}>submit</a>
        </form>);
    }
}

const mapStateToProps = state => { 
    return { user: state.user };
};
const mapActionToProp = (dispatch) => { 
    return { updateLogin:()=>dispatch(updateLogin()) };
};
export default connect(mapStateToProps,mapActionToProp)(SignUp);