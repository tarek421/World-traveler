import React, { useContext } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';



import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const socialIcon = { color: '#03a9f4', marginRight: '10px', fontSize: '30px' }

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser)
    var provider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });
    }

    return (
        <div className='login-container d-flex justify-content-center text-center'>
            <div className='d-flex align-items-center'>
                <div>
                    <h4>Login with</h4>
                    <button onClick={handleGoogle} className='d-flex align-items-center google-style my-3'>
                        <FontAwesomeIcon style={socialIcon} icon={faGoogle} />
                        <h6 className='text-center ml-3 m-0'> Countinue with Google</h6>
                    </button>
                    <small>Don't have an account? <a href="a">Create an account</a></small>
                </div>
            </div>
        </div>
    );
};

export default Login;