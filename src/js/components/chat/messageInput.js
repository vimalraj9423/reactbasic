import React from "react";
import { connect } from "react-redux"; 
class MessageInput extends React.Component {
    constructor(){
        super();
        this.addMessage = this.addMessage.bind(this);
    }
    addMessage(){
        if(this.input.value){
            this.props.addMessage(this.input.value);
        }
    }
    render() { 
        return (
        <div className="message-input"> 
            <textarea ref={el=>this.input=el}/>
            
            <a className="btn btn-primary right" href="#"    onClick={this.addMessage}>submit</a>
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
export default connect(mapStateToProps, mapActionToProp)(MessageInput);
