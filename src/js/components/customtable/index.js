import React from "react";
import { connect } from "react-redux";
class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            type: "DATE",
            page: "COLUMN_CREATION",
            columns: []
        };
        this.onChangeColumn = this.onChangeColumn.bind(this);
        this.saveFields = this.saveFields.bind(this);
        this.next = this.next.bind(this);
    }
    saveFields() {
        if (!this.fieldName.value || (this.state.type == "OPTIONS" && !this.optionsRef.value)) {
            alert("please Enter all");
        } else {
            this.setState({
                columns: [...this.state.columns, {
                    type: this.state.type,
                    name: this.fieldName.value,
                    options: this.state.type == "OPTIONS" ? this.optionsRef.value.split(",").filter(e => e != "") : undefined
                }]
            });
        }
    }
    next() {
        this.setState({
            page: "TABLE_VIEW"
        });
    }
    getTable() {

        let component = [];
        for (let i = 0; i < 10; i++) {
            component.push(
                <tr key={i}>
                    {
                        this.state.columns.map((field, index) => (

                            <td key={index}>
                                {
                                    field.type == "DATE" && <input type="date" ref={el=>this[i+"_"+index]=el} />
                                }
                                {
                                    field.type == "NUMBER" && <input type="date"  ref={el=>this[i+"_"+index]=el}/>
                                }
                                {
                                    field.type == "OPTIONS" &&
                                    <select  ref={el=>this[i+"_"+index]=el}>
                                        {
                                            field.options.map((option, is) => (
                                                <option key={is} value={option}>option</option>
                                            ))
                                        }
                                        <option>

                                        </option>
                                    </select>
                                }
                                <div  ref={el=>this[i+"_"+index+"err"]=el} style={{color:"red"}} >please give correct value</div>
                            </td>
                        ))
                    }
                </tr>
            );
        }
        return (<div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {
                            this.state.columns.map((field, index) => (
                                <th key={index}>{field.name}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>

                    {component}

                </tbody>
            </table>
            <button type="button" className="btn">submit</button>
        </div>);
    }
    getColumnCreationComponent() {
        return (
            <div className="container">
                <div className="row  ">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-5">

                        <div className="d-flex bg-light"  >
                            <div className="p-2  "><label>Name :</label> </div>
                            <div className="p-2   align-self-start">
                                <input type="text" placeholder="Enter the Column Name" ref={el => this.fieldName = el} />
                            </div>

                        </div>
                        <div className="d-flex bg-light"  >
                            <div className="p-2  "><label>Type:</label> </div>
                            <div className="p-2   align-self-start">
                                <select value={this.state.type} onChange={this.onChangeColumn}>
                                    <option value="DATE">Date</option>
                                    <option value="NUMBER">Number</option>
                                    <option value="OPTIONS">Multiselect</option>
                                </select></div>

                        </div>
                        {
                            this.state.type == "OPTIONS" && <div className="d-flex bg-light"  >
                                <div className="p-2  "><label>options:</label> </div>
                                <div className="p-2   align-self-start">
                                    <input type="text" ref={el => this.optionsRef = el} placeholder="Enter the fields seperate by comma" />

                                </div>

                            </div>
                        }
                        <div className="d-flex bg-light"  >
                            <div className="p-2   align-self-start">
                            </div>
                            <div className="p-2  ">
                                <button className="btn text-center" onClick={this.saveFields}> add</button>
                            </div>
                            <div className="p-2  ">
                                <button className="btn text-center" onClick={this.next}  > next</button>
                            </div>

                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>column name</th>
                                    <th>type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.columns.map((column, index) => (
                                        <tr key={index}>
                                            <td><label>{column.name}</label> </td>
                                            <td className="p-2   align-self-start">
                                                {column.type}
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>


                    </div>

                </div>
            </div>
        );
    }
    onChangeColumn(e) {
        this.setState({
            type: e.target.value
        });
    }
    render() {
        console.log(this.state)
        let component;
        if (this.state.page == "COLUMN_CREATION") {
            component = this.getColumnCreationComponent();
        } else if (this.state.page == "TABLE_VIEW") {
            component = this.getTable();
        }
        return component;
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};
const mapActionToProp = () => {
    return {};
};
export default connect(mapStateToProps, mapActionToProp)(Index);
