import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
        if ( error.msg.detail ) alert.error(`${error.msg.detail}`);
        if ( error.msg.username ) alert.error( `Username: ${ error.msg.username }` );
        if ( error.msg.email ) alert.error( `Email: ${ error.msg.email }` );
        if ( error.msg.password )  alert.error( `password: ${ error.msg.password }` );
        if ( error.msg.non_field_errors ) alert.error( error.msg.non_field_errors.join() );
        if (error.msg.msg) alert.error(`message: ${error.msg.msg.join()}`);

        // land errors
        }

        if (message !== prevProps.message) {
            if ( message.passwordNotMatch )  alert.error( `${ message.passwordNotMatch }` );

        }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)( withAlert()( Alerts ) );