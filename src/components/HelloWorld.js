import React from 'react';
import { connect } from "react-redux";

const HelloWorld = ({ text }) => <h1>{text}</h1>

const mapStateToProps = (state) => ({ text: state });

const HelloWorldContainer = connect(mapStateToProps)(HelloWorld);

export default HelloWorldContainer;