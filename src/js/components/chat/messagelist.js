import React from "react";
import { connect } from "react-redux";
import "./messagelist.scss";
import MessageInput from "./messageInput";
class Chat extends React.Component {
    getYourMessage(message,index) {
        return (

            <div className="col-md-12" key={index}>
                <div className="yours">
                    {message.message}
                </div>

            </div>
        );
    }
    getOtherMessage(message,index) {
        return (

            <div className="col-md-12" key={index}>
                <div className="others">
                {message.message}
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <div className="row message-list">
                {
                    this.props.messages.map((message,index)=>{
                        if(index%2==0){
                            return this.getYourMessage(message,index);
                        }else{
                            return this.getOtherMessage(message,index);
                        }
                    })
                } 
                </div>

                <div className="col-md-12">
                    <MessageInput addMessage={this.props.addMessage}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};
const mapActionToProp = () => {
    return {};
};
export default connect(mapStateToProps, mapActionToProp)(Chat);
