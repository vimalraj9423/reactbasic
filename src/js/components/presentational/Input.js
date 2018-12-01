import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Input = (props) => {
    const { label, text, type, id, value, handleChange }=props;
    console.log(props)
    return(
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};
const mapStateToProps = state => {  
    return { user: state.user };
  };
  const mapToActions=()=>{
      return{}
  }
export default connect(mapStateToProps,mapToActions)( Input); 