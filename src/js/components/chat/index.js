import React from "react";
import { connect } from "react-redux";
import UserList from "./userlist";
import MessageList from "./messagelist";
class Chat extends React.Component {
    constructor(){
        super();
        this.state={
            messages:[],
            userlist:[{
                name:"vimal"
            },{
                name:"Arun"
            }]
        };
        this.addMessage = this.addMessage.bind(this);
        this.selectUser =  this.selectUser.bind(this);
    }
    addMessage(value){
        this.setState({
            messages:[...this.state.messages,{message:value}]
        });
    }
    selectUser(user){
        this.setState({
            selectedUser:user
        });
    }
    render() {
        console.log("ggg")
        return (<div className="row">
            <div className="col-md-3">
                <UserList  userlist={this.state.userlist} selectUser={this.selectUser} activeUser={this.state.selectedUser}/>
            </div>
            <div className="col-md-9">
                <MessageList  messages={this.state.messages} addMessage={this.addMessage}/>
            </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};
const mapActionToProp = () => {
    return {};
};
export default connect(mapStateToProps, mapActionToProp)(Chat);
