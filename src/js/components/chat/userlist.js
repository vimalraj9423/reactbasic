import React from "react";
import { connect } from "react-redux";
import "./chat.scss";
class UserList extends React.Component {
    render() {
        console.log("Sdddddddddddd")
        return (<ul className="list-group list-group-flush user-list">
            {
                this.props.userlist.map((user, key) => (
                    <li className={"list-group-item  "+ (this.props.activeUser ==user?" active":"")} key={key} onClick={()=>this.props.selectUser(user)} >
                        <img src={"https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg"} />
                        <div className="user-details">
                            <h5 className="user-name">{user.name}</h5>
                        </div>
                    </li>
                ))
            }

        </ul>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};
const mapActionToProp = () => {
    return {};
};
export default connect(mapStateToProps, mapActionToProp)(UserList);

