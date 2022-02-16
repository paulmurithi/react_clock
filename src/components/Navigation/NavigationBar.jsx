import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { logout } from '../../actions/auth';
import User from '../../images/user.png';


const avatarStyle = {
    "width": "30px",
    "height": "30px",
    "margin": "-7px 5px 0 0",
    "-webkitBorderRadius": "50%",
    "-moz-borderRadius": "50%",
    "borderRadius": "50%"
}
class NavigationBar extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            isOpen: false
        }
        this.handleToggle = this.handleToggle.bind( this );
    }
    handleToggle () {
        this.setState( { isOpen: !this.state.isOpen } )
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render () {
        const { isAuthenticated, user } = this.props.auth;


        return (
            <nav className="navbar navbar-expand-lg sticky-top  navbar-inverse bg-light">
                <Link className="navbar-brand" to="/"><span className="navbar-p">C</span><span className="navbar-finder"></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"></div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    { isAuthenticated ? (
                        <ul className="nav justify-content-end">
                            { <><li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="authOptions" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="navbar-text mr-3">
                                        <img src={ User } class="nav-avatar" style={ avatarStyle } />
                                        { user ? `${ user.username }` : "" }
                                    </span>
                                </Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="dropdown-item" onClick={ this.props.logout }>LOGOUT</Link>
                            </li> 
                                </>}
                        </ul>
                    ) : (
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/signup">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
        )
    }
}
const mapStateToProps = ( state ) => ( {
    auth: state.auth
} );
export default connect( mapStateToProps, { logout } )( NavigationBar );